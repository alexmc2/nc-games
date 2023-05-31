import { useState, useEffect } from 'react';
import Home from '../src/components/pages/Home';
import * as api from './api';
import './App.css';

function App() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);  

  useEffect(() => {
    api.getReviews()
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
    <div className="app">
      <Home reviews={reviews} isLoading={isLoading} />
    </div>
  );
}

export default App;


