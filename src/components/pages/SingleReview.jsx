import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewById, getCommentsByReviewId } from '../../api';
import './SingleReview.css';
import CommentCard from '../CommentCard';

const SingleReview = () => {
  const [review, setReview] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  let { review_id } = useParams();
  const [comments, setComments] = useState([]);
  const [isCommentsLoading, setIsCommentsLoading] = useState(true);

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

  useEffect(() => {
    if (review) {
      setIsCommentsLoading(true);
      getCommentsByReviewId(review_id)
        .then((res) => {
          setComments(res.data.comments);
        })
        .catch((err) => {
          setIsCommentsLoading(false);
          alert('An error occurred!');
        });
    }
  }, [review, review_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="single-review-page">
      <div className="game-review">
        <h2>{review.title}</h2>
        <p>By: {review.owner}</p>
        <p>Created at: {review.created_at}</p>
        <p>{review.review_body}</p>
        <p>Comments: {review.comment_count}</p>
        <p>Votes: {review.votes}</p>
        <p>Designer: {review.designer}</p>
      </div>
      <div className="comments-section">
        {isCommentsLoading ? (
          <p>Loading comments...</p>
        ) : (
          comments.map((comment) => (
            <CommentCard key={comment.comment_id} comment={comment} />
          ))
        )}
      </div>
    </div>
  );
};

export default SingleReview;
