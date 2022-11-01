import "../components/styles/SellProduct.css";
import { Link } from "react-router-dom";

const SellProduct = () => {
  return (
    <div className="product-info">
      <div>
        <h1>Sälj produkt</h1>
        <div className="product-info-container">
          <div className="product">
            <h2>Produkt</h2>
            <input
              type="text"
              name="product"
              className="input"
              placeholder="Produktnamn"
            />
          </div>
          <div>
            <h2>Kvantitet</h2>
            <input
              type="text"
              name="quantity"
              className="input"
              placeholder="Produktens kvantitet"
            />
          </div>
          <div>
            <h2>Pris</h2>
            <input
              type="text"
              name="price"
              className="input"
              placeholder="Produktens pris"
            />
          </div>
          <div>
            <h2>Beskrivning</h2>
            <textarea
              type="text"
              name="description"
              className="input-text-area"
              placeholder="Beskrivning av produkten"
            />
          </div>
          <div>
            <img className="product-image" alt="bild" />
          </div>
          <div>
            <h2>Plats för upphämtning</h2>
            <input
              type="text"
              name="place"
              className="input"
              placeholder="Plats"
            />
          </div>
          <div>
            <h2>Telefon</h2>
            <input
              type="text"
              name="phone"
              className="input"
              placeholder="Telefonnummer"
            />
          </div>
          <div>
            <Link to="/MyAdverts" className="publish-button">
              Publicera annons
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellProduct;
