import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState();
  const [sortOrder, setSortOrder] = useState("asc");
  const [name, setName] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">E-Commerce</div>

            <div className="relative flex gap-6">
              <button
                className="hover:text-gray-600 relative"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Products
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                        onClick={() => setSelectedCategory(cat)}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
              </button>
              <a href="#" className="hover:text-gray-600">
                About
              </a>
              <a href="#" className="hover:text-gray-600">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-4 mb-6">
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
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>

          <input
            type="text"
            className="border rounded p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="  mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="rounded object-contain w-[300px] h-[300px]"
                />
              </div>
              <h3 className="font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600">${product.price}</p>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2">
                {product.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-auto">
            <button
              className="float-right text-2xl mb-4"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>
            <div className="relative h-64 mb-4">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.title}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h2 className="text-2xl font-bold mb-4">{selectedProduct.title}</h2>
            <p className="text-xl mb-4">${selectedProduct.price}</p>
            <p className="text-gray-600">
              Category: {selectedProduct.category}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
