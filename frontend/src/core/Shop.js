import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Card from "./Card";
import CheckBox from "./Checkbox";
import { getCategories } from "./ApiCore";
import {prices} from './FixedPrices';
import Radiobox from "./Radiobox";

const Shop = () => {
  const [myFilters, setMyFilters] = useState({
    filters: { category: [], price: [] },
  });
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);

  const init = () => {
    getCategories().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  useEffect(() => {
    init();
  }, []);

  const handleFilters = (filters, filterBy) => {
    // console.log("Shop", filters, filterBy);
    const newFilters = { ...myFilters };
    newFilters.filters[filterBy] = filters;
    setMyFilters(newFilters);
  };
  return (
    <Layout
      title="Shop Page"
      description="Search and find your product of choice"
      className="section"
    >
      <div className="row">
        <div className="col-4">
          <p>Filter by category</p>
          <ul>
            <CheckBox
              categories={categories}
              handleFilters={(filters) => handleFilters(filters, "category")}
            />
          </ul>

          <p>Filter by price</p>
          <ul>
            <Radiobox
              prices={prices}
            />
          </ul>
        </div>
        

        <div className="col-8">Right</div>
      </div>
    </Layout>
  );
};

export default Shop;
