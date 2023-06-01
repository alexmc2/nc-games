import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewById } from '../../api';
import './SingleReview.css';

const SingleReview = () => {
  const [review, setReview] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  let { review_id } = useParams();

  useEffect(() => {
    getReviewById(review_id)
      .then((res) => {
        setReview(res.data.review);
        console.log(res.data.review);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [review_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="game-review">
      <img src={review.review_img_url} alt={review.title} />
      <h2>{review.title}</h2>
      <p>By: {review.owner}</p>
      <p>Created at: {review.created_at}</p>
      <p>{review.review_body}</p>
      <p>Comments: {review.comment_count}</p>
      <p>Votes: {review.votes}</p>
      <p>Designer: {review.designer}</p>
    </div>
  );
};

export default SingleReview;
