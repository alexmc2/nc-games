import React, { useState, useEffect } from 'react';
import * as api from '../api';
import '../styles/AllReviews.css';
import ReviewCard from './ReviewCard';

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
      {reviews.map((review) => (
        <ReviewCard key={review.review_id} review={review} />
      ))}
    </div>
  );
};

export default AllReviews;
