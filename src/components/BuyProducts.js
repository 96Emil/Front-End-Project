import { Link } from "react-router-dom";
import "../components/styles/BuyProducts.css";

const BuyProducts = () => {
  return (
    <div className="buy-products">
      <div className="buy-products-header">
        <h1>Köp produkter</h1>
      </div>
      <div className="buy-products-container">
        <div className="card">
          <div className="card-1-background-image">
            <div className="card-header">
              <h3>Potatis</h3>
            </div>
          </div>
          <div className="card-info-1">
            <h3>
              100 kg potatis <br /> 1 kr/kg
            </h3>
          </div>
          <div className="card-info-2">
            <p>
              Överbliven skörd <br /> Liljeholmen
            </p>
          </div>
          <div className="info-button-card-1">
            <Link to="/ProductInfoPotatoes" className="info-button-click">
              Information
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-2-background-image">
            <div className="card-header">
              <h3>Morötter</h3>
            </div>
          </div>
          <div className="card-2-info-1">
            <h3>
              100 kg potatis <br /> 1 kr/kg
            </h3>
          </div>
          <div className="card-2-info-2">
            <p>
              Överbliven skörd <br /> Liljeholmen
            </p>
          </div>
          <div className="info-button-card-2">
            <Link to="/ProductInfo" className="info-button-click">
              Information
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-3-background-image">
            <div className="card-header">
              <h3>Äpplen</h3>
            </div>
          </div>
          <div className="card-3-info-1">
            <h3>
              100 kg potatis <br /> 1 kr/kg
            </h3>
          </div>
          <div className="card-3-info-2">
            <p>
              Överbliven skörd <br /> Liljeholmen
            </p>
          </div>
          <div className="info-button-card-3">
            <Link to="/ProductInfo" className="info-button-click">
              Information
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-3-background-image">
            <div className="card-header">
              <h3>Äpplen</h3>
            </div>
          </div>
          <div className="card-3-info-1">
            <h3>
              100 kg potatis <br /> 1 kr/kg
            </h3>
          </div>
          <div className="card-3-info-2">
            <p>
              Överbliven skörd <br /> Liljeholmen
            </p>
          </div>
          <div className="info-button-card-3">
            <Link to="/ProductInfo" className="info-button-click">
              Information
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-3-background-image">
            <div className="card-header">
              <h3>Äpplen</h3>
            </div>
          </div>
          <div className="card-3-info-1">
            <h3>
              100 kg potatis <br /> 1 kr/kg
            </h3>
          </div>
          <div className="card-3-info-2">
            <p>
              Överbliven skörd <br /> Liljeholmen
            </p>
          </div>
          <div className="info-button-card-3">
            <Link to="/ProductInfo" className="info-button-click">
              Information
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-3-background-image">
            <div className="card-header">
              <h3>Äpplen</h3>
            </div>
          </div>
          <div className="card-3-info-1">
            <h3>
              100 kg potatis <br /> 1 kr/kg
            </h3>
          </div>
          <div className="card-3-info-2">
            <p>
              Överbliven skörd <br /> Liljeholmen
            </p>
          </div>
          <div className="info-button-card-3">
            <Link to="/ProductInfo" className="info-button-click">
              Information
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyProducts;
