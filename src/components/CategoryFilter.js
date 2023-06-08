import React from "react";

function CategoryFilter({categories, onCategoryChange, selectedCategory}) {
  function setClassName (category) {
      if (category === selectedCategory)
      return "selected"
  }

  const allCategories = categories.map((category) => {
  return <button key={category} className={setClassName(category)} onClick={() => onCategoryChange(category)}>{category}</button>
})
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {allCategories}
    </div>
  );
}

export default CategoryFilter;
