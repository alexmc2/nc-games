import { Link } from 'react-router-dom';
import '../styles/ReviewCard.css';

const ReviewCard = ({ review }) => {
  const {
    review_id,
    title,
    owner,
    review_img_url,
    created_at,
    votes,
    comment_count,
  } = review;

  return (
    <Link to={`/reviews/${review_id}`} className="review-card">
      <img src={review_img_url} alt={title} className="review-card-image" />
      <div className="review-card-content">
        <h2>{title}</h2>
        <p className="review-card-content-author">by {owner}</p>
        <p className="review-card-content-created-at">
          Created at {created_at}
        </p>
        <p className="review-card-content-votes">Votes: {votes}</p>
        <p className="review-card-content-comments">
          Comments: {comment_count}
        </p>
      </div>
    </Link>
  );
};

export default ReviewCard;
