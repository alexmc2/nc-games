import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../api';
import './AllReviews.css';

const ReviewCard = ({ review }) => {
  const {
    review_id,
    title,
    owner,
    review_img_url,
    created_at,
    votes,
    comment_count,
  } = review;

  return (
    <Link to={`/reviews/${review_id}`} className="review-card">
      <img src={review_img_url} alt={title} className="review-card-image" />
      <div className="review-card-content">
        <h2>{title}</h2>
        <p>by {owner}</p>
        <p>Created at {created_at}</p>
        <p>Votes: {votes}</p>
        <p>Comments: {comment_count}</p>
      </div>
    </Link>
  );
};

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .getReviews()
      .then((res) => {
        setReviews(res.data.reviews);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading reviews...</p>;
  }

  return (
    <div className="reviews-container">
      {isLoading && <p>Loading reviews...</p>}
      {reviews.map((review) => (
        <ReviewCard key={review.review_id} review={review} />
      ))}
    </div>
  );
};

export default AllReviews;
