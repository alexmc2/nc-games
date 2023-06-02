import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewById, getCommentsByReviewId } from '../api';
import '../styles/SingleReview.css';
import CommentCard from './CommentCard';
import VoteHandler from '../components/VoteHandler';

const SingleReview = () => {
  const [review, setReview] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  let { review_id } = useParams();
  const [comments, setComments] = useState([]);

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

  useEffect(() => {
    if (review) {
      getCommentsByReviewId(review_id)
        .then((res) => {
          setComments(res.data.comments);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [review, review_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
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
      <div className="comments-section">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <CommentCard key={comment.comment_id} comment={comment} />
          ))
        ) : (
          <p>Be the first to write a comment!</p>
        )}
      </div>
    </div>
  );
};

export default SingleReview;
