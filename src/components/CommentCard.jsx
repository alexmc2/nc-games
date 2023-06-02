import React from 'react';
import '../styles/CommentCard.css';

const CommentCard = ({ comment }) => {
  return (
    <div className="comment-card">
      <h4>Author: {comment.author}</h4>
      <p>{comment.body}</p>
      <p>Votes: {comment.votes}</p>
      <p>Created at: {new Date(comment.created_at).toLocaleString()}</p>
    </div>
  );
};

export default CommentCard;
