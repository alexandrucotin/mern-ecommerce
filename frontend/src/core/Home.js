import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProducts } from "./ApiCore";
import Card from "./Card";
import Search from './Search';


const Home = () => {
  const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  const [error, setError] = useState(false);

  const loadProductsBySell = () => {
    getProducts("sold").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsBySell(data);
      }
    });
  };

  const loadProductsByArrival = () => {
    getProducts("createdAt").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsByArrival(data);
      }
    });
  };

  useEffect(() => {
    loadProductsByArrival();
    loadProductsBySell();
  }, []);

  return (
    <Layout title="Home Page" description="E-commerce App" className="section">
      <Search />
      <div className='container-home'>
      <div className="home-section">
        <h2 className="home-header">new arrivals</h2>
        <div className="container-cards">
          {productsByArrival.map((product, i) => (
            <Card key={i} product={product} />
          ))}
        </div>
      </div>

      <div className="home-section">
        <h2 className="home-header">best sellers</h2>
        <div className="container-cards">
          {productsBySell.map((product, i) => (
            <Card key={i} product={product} />
          ))}
        </div>
      </div>
      </div>
    </Layout>
  );
};
export default Home;
