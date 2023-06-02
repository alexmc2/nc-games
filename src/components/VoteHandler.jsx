import React, { useState } from 'react';
import { updateReviewVotes } from '../api';
import '../styles/VoteHandler.css';

function VoteHandler({ review_id, votes }) {
  const [voteChange, setVoteChange] = useState(0);

  const upVote = () => {
    if (voteChange !== 0) return;
    setVoteChange(1);
    updateReviewVotes(review_id, 1)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setVoteChange(0);
        alert('Vote failed to register!');
      });
  };

  const downVote = () => {
    if (voteChange !== 0) return;
    setVoteChange(-1);
    updateReviewVotes(review_id, -1)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setVoteChange(0);
        alert('Vote failed to register!');
      });
  };

  const disabledVote = voteChange !== 0;

  return (
    <div>
      <button
        className={`vote-button vote-button-upvote ${
          disabledVote ? 'vote-button-disabled' : ''
        }`}
        onClick={upVote}
        disabled={disabledVote}
      >
        👍
      </button>
      <button
        className={`vote-button vote-button-downvote ${
          disabledVote ? 'vote-button-disabled' : ''
        }`}
        onClick={downVote}
        disabled={disabledVote}
      >
        👎
      </button>
      <p>Votes: {votes + voteChange}</p>
    </div>
  );
}

export default VoteHandler;
