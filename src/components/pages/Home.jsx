import React from 'react';
import ReviewCard from '../Reviews';
import './Home.css';

const Home = ({ reviews, isLoading }) => {
  if (isLoading) {
    return <p>Loading reviews...</p>;
  }

  return (
    <div className="reviews-list">
      {reviews.map((review) => (
        <ReviewCard key={review.review_id} review={review} />
      ))}
    </div>
  );
};

export default Home;
