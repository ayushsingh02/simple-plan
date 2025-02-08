import axios from "axios";
import React, { useEffect, useState } from "react";

const Header = () => {
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
    <div>
      {products?.map((product) => {
        return <p>{product?.title}</p>;
      })}
    </div>
  );
};

export default Header;

// fetch('',)
//             .then(res=>res.json())
//             .then(json=>console.log(json)),
