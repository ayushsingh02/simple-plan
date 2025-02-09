import DefaultLayout from "../component/layout";
import { useLocation } from "react-router";

const ProductDetailsPage = () => {
  const { state } = useLocation();
  const selectedProduct = state;

  return (
    <DefaultLayout>
      <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100 mt-8 pt-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-2xl w-full">
          <div className="flex justify-center p-6">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="rounded-lg object-contain w-full h-64 sm:h-80 md:h-96"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">{selectedProduct.title}</h2>
            <p className="text-xl font-semibold text-gray-800 mb-4">
              ${selectedProduct.price}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Category:</span>{" "}
              {selectedProduct.category}
            </p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ProductDetailsPage;