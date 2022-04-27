import React from "react";

const Categories = ({ filterItems, categories }) => {
  return (
    <main>
      <div className="btn-container">
        {categories.map((category, index) => {
          return (
            <button
              type="button"
              key={index}
              className="filter-btn"
              onClick={() => {
                return filterItems(category);
              }}
            >
              {category}
            </button>
          );
        })}
      </div>
    </main>
  );
};

export default Categories;
