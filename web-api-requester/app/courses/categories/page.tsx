import React from 'react';

const categories = ['Category 1', 'Category 2', 'Category 3'];

const CategoriesPage: React.FC = () => {
  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesPage;