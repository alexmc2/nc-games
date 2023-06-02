import React, { useState, useEffect } from 'react';
import '../styles/AllReviews.css';
import ReviewCard from './ReviewCard';

const AllReviews = ({ reviews }) => (
  <div className="reviews-container">
    {reviews.map((review) => (
      <ReviewCard key={review.review_id} review={review} />
    ))}
  </div>
);

export default AllReviews;
