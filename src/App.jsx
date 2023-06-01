import { Route, Routes } from 'react-router-dom';
import Home from '../src/components/pages/Home';
import SingleReview from './components/pages/SingleReview';
import './App.css';
import Navbar from './components/Nav';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/reviews/:review_id" element={<SingleReview />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
