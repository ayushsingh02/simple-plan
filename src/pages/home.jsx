import React, { useEffect, useState } from "react";
import DefaultLayout from "../component/layout";
import Products from "../component/products";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const products = await axios.get("https://fakestoreapi.com/products");
      console.log(products?.data);
      setProducts(products?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <DefaultLayout>
      <div>
        <div className="hero">
          <img className="pt-8" src="./assets/img/banner-2.jpg" alt="" />
          <h1 className="hero-text">SimplePlan Mart</h1>
        </div>
        <Products products={products} />
      </div>
    </DefaultLayout>
  );
};

export default Home;
