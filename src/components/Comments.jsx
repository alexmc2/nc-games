import React, { useState, useEffect } from 'react';
import { getCommentsByReviewId } from '../api';
import CommentCard from './CommentCard';
import '../styles/Comments.css'

const Comments = ({ reviewId }) => {
  const [comments, setComments] = useState([]);
  const [isCommentsLoading, setIsCommentsLoading] = useState(true);

  useEffect(() => {
    setIsCommentsLoading(true);
    getCommentsByReviewId(reviewId)
      .then((res) => {
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
