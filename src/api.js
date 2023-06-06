import axios from 'axios';

const api = axios.create({
  baseURL: 'https://game-reviews-m0nu.onrender.com',
});

export const getReviews = () => {
  return api.get('/api/reviews');
};
export const getReviewById = (id) => {
  return api.get(`/api/reviews/${id}`);
};

export const getCommentsByReviewId = (id) => {
  return api.get(`/api/reviews/${id}/comments`);
};

export const updateReviewVotes = (id, inc_votes) => {
  return api.patch(`/api/reviews/${id}`, { inc_votes });
};

export const postCommentByReviewId = (review_id, comment) => {
  return api.post(`/api/reviews/${review_id}/comments`, comment);
};

export const fetchUsers = () => {
  return api.get('/api/users');
};

export const fetchUserByUsername = (username) => {
  return api.get(`/api/users/${username}`);
};
export const getCategories = () => {
  return api.get('/api/categories');
};
export const getReviewsByCategory = (category) => {
  return api.get('/api/reviews', { params: { category: category } });
};


