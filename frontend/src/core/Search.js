import React, { useState, useEffect } from "react";
import { getCategories } from "./ApiCore";
import Card from "./Card";

const Search = () => {
  const [data, setData] = useState({
    categories: [],
    category: "",
    search: "",
    results: [],
    searched: false,
  });

  const { categories, category, search, results, searched } = data;

  const loadCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setData({ ...data, categories: data });
      }
    });
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const searchSubmit = () => {};

  const handleChange = () => {};

  const searchForm = () => (
    <form onSubmit={searchSubmit} >
      <div className="search-container">
      <div className="categories-search">
        <select
          className="select-component"
          onChange={handleChange("category")}
        >
          <option value="All">Pick category</option>
          {categories.map((category, i) => (
            <option key={i} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <input
        type="search"
        className="form-search"
        onChange={handleChange("search")}
        placeholder="Search by name"
      />
      <div className="">
          <button className="button-search">search</button>
      </div>
      </div>
    </form>
  );

  return (
    <div>
      <div className="container"> {searchForm()}</div>
    </div>
  );
};

export default Search;
