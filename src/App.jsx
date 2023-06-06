import { Route, Routes } from 'react-router-dom';
import AllReviews from '../src/components/AllReviews';
import SingleReview from '../src/components/SingleReview';
import '../src/styles/App.css';
import Navbar from '../src/components/Nav';
import { UserProvider } from './contexts/UserContext';
import Categories from '../src/components/Categories';
import CategoryPage from './components/CategoryPage';

function App() {
  return (
    <UserProvider>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/reviews/:review_id" element={<SingleReview />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:category" element={<CategoryPage />} />

          <Route path="/" element={<AllReviews />} />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
