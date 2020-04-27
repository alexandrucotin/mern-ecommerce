import React, { useState, useEffect, Fragment } from "react";

const Radiobox = ({ prices, handleFilters }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    handleFilters(event.target.value);
    setValue(event.target.value);
  };

  return prices.map((price, i) => (
    <div key={i} className="checkbox-list">
      <input
        onChange={handleChange}
        type="radio"
        className="checkbox"
        value={`${price._id}`}
        name={price}
      />
      <label className="checkbox-label">{price.name}</label>
    </div>
  ));
};

export default Radiobox;
