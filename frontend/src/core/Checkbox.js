import React, { useState } from "react";

const Checkbox = ({ categories, handleFilters }) => {
  const [checked, setChecked] = useState([]);

  const handleToggle = (c) => () => {
    // return the first index or -1
    const currentCategoryId = checked.indexOf(c);
    const newCheckedCategoryId = [...checked];
    // if currently checked was not already in checked state > push
    // else pull/take of

    if (currentCategoryId === -1) {
      newCheckedCategoryId.push(c);
    } else {
      newCheckedCategoryId.splice(currentCategoryId, 1);
    }
    // console.log(newCheckedCategoryId);
    setChecked(newCheckedCategoryId);

    handleFilters(newCheckedCategoryId)
  };

  return categories.map((category, i) => (
    <li key={i} className="list-unstyle">
      <input
        onChange={handleToggle(category._id)}
        type="checkbox"
        className="form-check-input"
        value={checked.indexOf(category._id ===-1)}
      />
      <label className="form-check-label">{category.name}</label>
    </li>
  ));
};

export default Checkbox;
