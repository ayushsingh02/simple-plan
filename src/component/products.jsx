import React, { useEffect, useState } from "react";
import ProductCard from "./product-card";
import { loadFav, markFav, unMarkFav } from "../utils/common";

export const Products = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");
  const [name, setName] = useState("");
  const [fav, setFav] = useState([]);

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products
    .filter(
      (p) =>
        (selectedCategory === "all" || p.category === selectedCategory) &&
        p?.title?.toLowerCase().includes(name?.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

  const setFavHandler = async () => {
    try {
      const data = await loadFav();
      setFav(data);
    } catch (error) {
      console.log(error);
    }
  };

  const markFavrouite = (id) => {
    setFav(prev => ([...prev, id]));
    markFav(id)
  }

  const unMarkFavrouite = (id) => {
    setFav(prev => (prev?.filter(i => i !== id)));
    unMarkFav(id)
  }

  useEffect(() => {
    setFavHandler();
  }, []);

  return (
    <div>
      <h2 className="text-[45px] font-[700] text-center mt-8 mb-8">
        ALL PRODUCTS
      </h2>

      <div className="flex flex-wrap gap-4 mb-6 justify-center products-drop">
        <select
          className="border rounded p-2"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>

        <select
          className="border rounded p-2"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Discending</option>
        </select>

        <input
          type="text"
          className="border rounded p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
       placeholder="Search"
       />
      </div>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts?.map((product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
                isFav={fav?.includes(product?.id)}
                markFavrouite={markFavrouite}
                unMarkFavrouite={unMarkFavrouite}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Products;
