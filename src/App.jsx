import { Route, Routes } from "react-router";
import Home from "./pages/home";
import ProductDetailsPage from "./pages/product-details";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product-details" element={<ProductDetailsPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />


    </Routes>
  );
}

export default App;
