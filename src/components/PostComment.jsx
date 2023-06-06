import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { postCommentByReviewId } from '../api';
import { UserContext } from '../contexts/UserContext';
import '../styles/CommentCard.css';

const PostComment = ({ setComments, setIsPosting, setPostError }) => {
  const { review_id } = useParams();
  const { user } = useContext(UserContext);
  const [comment, setNewComment] = useState({
    username: user.username,
    body: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPosting(true);

    if (comment.body) {
      postCommentByReviewId(review_id, comment)
        .then((response) => {
          setIsPosting(false);
          const newComment = response.data.comment;
          setComments((currentComments) => [newComment, ...currentComments]);
          setNewComment({ username: '', body: '' }); //clear fields after comment ubmitted
        })
        .catch((err) => {
          setIsPosting(false);
          setPostError('Please enter valid username!');
        });
    }
  };

  return (
    <form id="comment-form" onSubmit={handleSubmit} className="comment-card">
      <div>
        <p>Post a comment</p>
        <div>
        <label htmlFor="username">Enter your name: </label>
        <input
          id="username"
          type="text"
          name="username"
          value={comment.username}
          onChange={(e) => {
            setNewComment({ ...comment, username: e.target.value });
          }}
        />
        </div>
        <div>
        <label htmlFor="body">Your comment: </label>
        <textarea
          id="body"
          type="text"
          name="comment-body"
          value={comment.body}
          onChange={(e) => {
            setNewComment({ ...comment, body: e.target.value });
          }}
        />
        </div>
        {/* <button disabled={setIsPosting}>submit</button> */}
      </div>
    </form>
  );
};

export default PostComment;
