import React, { useState, useEffect } from 'react';
import '../styles/AllReviews.css';
import ReviewCard from './ReviewCard';
import * as api from '../api';
import Header from './Header';

const AllReviews = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

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
    return (
      <section>
        <p style={{ fontSize: '1.5rem', marginTop: '150px' }}>
          Loading reviews...
        </p>
      </section>
    );
  }
  return (
    <>
      <Header />
      <div className="reviews-container">
        {reviews.map((review) => (
          <ReviewCard key={review.review_id} review={review} />
        ))}
      </div>
    </>
  );
};

export default AllReviews;
