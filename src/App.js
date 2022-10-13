import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import BuyProducts from "./components/BuyProducts";
import ProductInfoPotatoes from "./components/ProductInfoPotatoes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/buyproducts" element={<BuyProducts />} />
          <Route
            path="/productinfopotatoes"
            element={<ProductInfoPotatoes />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
