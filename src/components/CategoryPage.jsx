import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsByCategory } from '../api';
import ReviewCard from './ReviewCard';
import '../styles/AllReviews.css';
import '../styles/CategoryPage.css';

const CategoryPage = () => {
  const { category } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReviewsByCategory = () => {
      setIsLoading(true);

      getReviewsByCategory(category)
        .then((response) => {
          console.log('Fetched reviews by category:', response.data.reviews);
          setReviews(response.data.reviews);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    };

    fetchReviewsByCategory();
  }, [category]);

  if (isLoading) {
    return <p>Loading reviews...</p>;
  }

  return (
    <>
      <h2 className="category-heading">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h2>

      <div className="reviews-container">
        {reviews.map((review) => (
          <ReviewCard key={review.review_id} review={review} />
        ))}
      </div>
    </>
  );
};

export default CategoryPage;
