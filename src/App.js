import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import BuyProducts from "./components/BuyProducts";
import ProductInfo from "./components/ProductInfo";
import SellProduct from "./components/SellProduct";
import MyAdverts from "./components/MyAdverts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/buyproducts" element={<BuyProducts />} />
          <Route path="/sellproduct" element={<SellProduct />} />
          <Route path="/ProductInfo/:id" element={<ProductInfo />} />
          <Route path="/MyAdverts" element={<MyAdverts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
