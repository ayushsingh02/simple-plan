import DefaultLayout from "../component/layout";

import { useLocation } from "react-router";

const ProductDetailsPage = () => {
  const { state } = useLocation();
  const selectedProduct = state;
  return (
    <DefaultLayout>
      <div className="flex items-center justify-center p-4">
        <div className="bg-white rounded-lg  overflow-auto">
          <div className="relative  mb-4">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="rounded object-contain w-[300px] h-[300px]"
              />
          </div>
          <h2 className="text-2xl font-bold mb-4">{selectedProduct.title}</h2>
          <p className="text-xl mb-4">${selectedProduct.price}</p>
          <p className="text-gray-600">Category: {selectedProduct.category}</p>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ProductDetailsPage;
