import React, { useState, useEffect } from 'react';
import AllReviews from './AllReviews';
import * as api from '../api';

const Home = () => {
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

  return (
    <div>
      {isLoading ? <p>Loading reviews...</p> : <AllReviews reviews={reviews} />}
    </div>
  );
};

export default Home;
