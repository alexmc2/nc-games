import React, { useEffect, useState } from 'react';
import { getCategories } from '../api';
import { Link } from 'react-router-dom'
import '../styles/Categories.css'

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = () => {
      setIsLoading(true);

      getCategories()
      .then(({ data }) => {
        console.log(data)
          setCategories(data.categories);
          
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    };

    fetchCategories();
  }, []);

  if (isLoading) {
    return <p>Loading categories...</p>;
  }

 

  return (
    <div className="categories">
      <h2>Categories</h2>
      {categories.map((category) => (
        <div className="category" key={category.slug}>
             <Link to={`/categories/${category.slug}`} className="category-link">
          <h3>{category.slug}</h3>
          <p>{category.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
