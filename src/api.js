import axios from 'axios';

const api = axios.create({
  baseURL: 'https://game-reviews-m0nu.onrender.com',
});

export const getReviews = () => {
  return api.get('/api/reviews');
};
