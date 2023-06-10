import React from 'react';
import { useSearchParams } from 'react-router-dom';
import '../styles/SortReviews.css';

const SortReviews = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get('sort_by') || 'created_at';
  const order = searchParams.get('order') || 'desc';

  const handleSort = (e) => {
    const { name, value } = e.target;
    setSearchParams({ ...searchParams, [name]: value });
  };

  return (
    <div className="sort-form">
      <label htmlFor="sort_by">Sort Reviews By:</label>
      <select name="sort_by" id="sort_by" value={sortBy} onChange={handleSort}>
        <option value="created_at">Date</option>
        <option value="votes">Votes</option>
        <option value="comment_count">Comment count</option>
      </select>
      <label htmlFor="order">Order:</label>
      <select name="order" id="order" value={order} onChange={handleSort}>
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
    </div>
  );
};

export default SortReviews;
