import { Route, Routes } from "react-router";
import Home from "./pages/home";
import ProductDetailsPage from "./pages/product-details";
import About from "./pages/about";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product-details" element={<ProductDetailsPage />} />
      <Route path="/about" element={<About />} />

    </Routes>
  );
}

export default App;
