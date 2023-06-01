import React from 'react';
import './Reviews.css';

const ReviewCard = ({ review }) => {
  const { title, owner, review_img_url, created_at, votes, comment_count } =
    review;

  return (
    <div className="review-card">
      <img src={review_img_url} alt={title} />
      <h2>{title}</h2>
      <p>by {owner}</p>
      <p>Created at {created_at}</p>
      <p>Votes: {votes}</p>
      <p>Comments: {comment_count}</p>
    </div>
  );
};

export default ReviewCard;
