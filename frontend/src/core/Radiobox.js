import React, { useState, useEffect, Fragment } from "react";

const Radiobox = ({ prices, handleFilters }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    handleFilters(event.target.value);
    setValue(event.target.value);
  };

  return prices.map((price, i) => (
    <div key={i}>
      <input
        onChange={handleChange}
        type="radio"
        className="form-check-input"
        value={`${price._id}`}
        name={price}
      />
      <label className="form-check-label">{price.name}</label>
    </div>
  ));
};

export default Radiobox;
