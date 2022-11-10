import React, { Component } from "react";
import "./App.css";
import "../src/components/styles/Navbar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import { MenuItems } from "./components/MenuItems";
import BuyProducts from "./components/BuyProducts";
import ProductInfo from "./components/ProductInfo";
import SellProduct from "./components/SellProduct";
import ConfirmPurchase from "./components/ConfirmPurchase";
import Receipt from "./components/Receipt";
import Footer from "./components/Footer";
import { FaCarrot } from "react-icons/fa";

class App extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <nav className="navbar-items">
            <div className="carrot-icon">
              <Link to="/" className="carrot-icon-link">
                <FaCarrot />
              </Link>
            </div>
            <h1 className="navbar-logo">
              <Link to="/" className="navbar-header">
                Taste The <br></br>Waste
              </Link>
            </h1>
            <div className="menu-icon" onClick={this.handleClick}>
              <i
                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
              ></i>
            </div>
            <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
              {MenuItems.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={item.url}
                      className={item.cName}
                      onClick={this.handleClick}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/buyproducts" element={<BuyProducts />} />
            <Route path="/sellproduct" element={<SellProduct />} />
            <Route path="/productinfo/:id" element={<ProductInfo />} />
            <Route path="/confirmpurchase/:id" element={<ConfirmPurchase />} />
            <Route path="/receipt/:id" element={<Receipt />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
