import React, { useState, useEffect } from 'react';
import { getCommentsByReviewId } from '../api';
import PostComment from '../components/PostComment';
import '../styles/Comments.css';
import CommentCard from './CommentCard';

const Comments = ({ reviewId }) => {
  const [comments, setComments] = useState([]);
  const [isCommentsLoading, setIsCommentsLoading] = useState(true);
  const [isPosting, setIsPosting] = useState(false);
  const [postError, setPostError] = useState(null);

  useEffect(() => {
    setIsCommentsLoading(true);
    getCommentsByReviewId(reviewId)
      .then((res) => {
        console.log('Comments fetched: ', res.data.comments);
        setComments(res.data.comments);
        setIsCommentsLoading(false);
      })
      .catch((err) => {
        if (err.response && err.response.data.msg !== 'Not found!') {
          alert('An error occurred while fetching the comments!');
        }
        setIsCommentsLoading(false);
      });
  }, [reviewId]);

  return (
    <div className="comments-section">
      <PostComment
        setComments={setComments}
        setIsPosting={setIsPosting}
        setPostError={setPostError}
      />
      {postError && <p>{postError}</p>}
      {isPosting && <p>Posting comment...</p>}
      {isCommentsLoading ? (
        <p>Loading comments...</p>
      ) : comments.length > 0 ? (
        comments.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))
      ) : (
        <p>Be the first to write a comment!</p>
      )}
    </div>
  );
};

export default Comments;
