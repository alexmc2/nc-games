import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewById } from '../api';
import '../styles/SingleReview.css';
import VoteHandler from '../components/VoteHandler';
import Comments from './Comments';

const SingleReview = () => {
  const [review, setReview] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { review_id } = useParams();

  useEffect(() => {
    getReviewById(review_id)
      .then((res) => {
        setReview(res.data.review);
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
    <div className="single-review-page-container">
      <div className="single-review-page">
        <div className="game-review">
          <img src={review.review_img_url} alt={review.title} />
          <div className="review-content">
            <h2>{review.title}</h2>
            <p>By: {review.owner}</p>
            <p>Created at: {review.created_at}</p>
            <div className="review-body-and-votes">
              <p>{review.review_body}</p>
              <VoteHandler review_id={review_id} votes={review.votes} />
            </div>
            <p>Comments: {review.comment_count}</p>
            <p>Designer: {review.designer}</p>
          </div>
        </div>
        <Comments reviewId={review_id} />
      </div>
    </div>
  );
};

export default SingleReview;
