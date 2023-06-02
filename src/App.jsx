import { Route, Routes } from 'react-router-dom';
import Home from '../src/components/Home';
import SingleReview from '../src/components/SingleReview';
import '../src/styles/App.css';
import Navbar from '../src/components/Nav';

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
