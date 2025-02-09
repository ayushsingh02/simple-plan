import React from "react";
import { useNavigate } from "react-router";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ product, isFav, markFavrouite, unMarkFavrouite }) => {
  const navigate = useNavigate();

  return (
    <div key={product?.id} className="card relative p-6 text-center">
      <span className="absolute top-2 right-2">
        {isFav ? (
          <span
            onClick={() => {
              unMarkFavrouite(product?.id);
            }}
          >
            <FaHeart />
          </span>
        ) : (
          <span
            onClick={() => {
              markFavrouite(product?.id);
            }}
          >
            <CiHeart />
          </span>
        )}
      </span>
      <div>
        <img
          src={product.image}
          alt={product.title}
          className="rounded object-contain w-[300px] h-[300px]"
        />
      </div>
      <h3 className="font-[600] text-start">{product.title}</h3>
      <h2 className="font-[900] text-start text-black-900">{product.price}</h2>
      <p className="text-[#818181] text-start mb-3 ">{product.category}</p>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() =>
          navigate("/product-details", {
            state: product,
          })
        }
      >
        View details
      </button>
    </div>
  );
};

export default ProductCard;
