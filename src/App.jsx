import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/components/pages/Home';
import SingleReview from './components/SingleReview';
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/reviews/:review_id" element={<SingleReview />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
