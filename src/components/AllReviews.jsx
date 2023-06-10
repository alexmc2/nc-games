import React, { useState, useEffect } from 'react';
import '../styles/AllReviews.css';
import ReviewCard from './ReviewCard';
import { useSearchParams } from 'react-router-dom';
import * as api from '../api';
import Header from './Header';
import SortReviews from './SortReviews';

const AllReviews = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [searchParams] = useSearchParams();

  const sortBy = searchParams.get('sort_by') || 'created_at';
  const order = searchParams.get('order') || 'desc';

  useEffect(() => {
    api
      .getReviews(sortBy, order)
      .then((res) => {
        console.log('Search params:', sortBy, order);
        setReviews(res.data.reviews);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [sortBy, order]);

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
      <SortReviews />
      <div className="reviews-container">
        {reviews.map((review) => (
          <ReviewCard key={review.review_id} review={review} />
        ))}
      </div>
    </>
  );
};

export default AllReviews;
