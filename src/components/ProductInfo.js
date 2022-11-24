import { useParams } from "react-router-dom";
import UseFetch from "./UseFetch";
import "../components/styles/ProductInfo.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const ProductInfo = () => {
  const { id } = useParams();
  const {
    data: post,
    error,
    isPending,
  } = UseFetch("http://localhost:8000/posts/" + id);

  return (
    <div className="product-info">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {post && (
        <div>
          <h1>Produktinformation</h1>
          <div className="product-info-container">
            <div className="product">
              <h2>Produkt</h2>
              <input
                readOnly
                type="text"
                name="product"
                className="read-only-input"
                value={`${post.product}`}
              />

              <div>
                <h2>Kvantitet</h2>
                <input
                  readOnly
                  type="text"
                  name="quantity"
                  className="quantity-read-only-input"
                  value={`${post.quantity}`}
                />
                <div className="input-explainer">kg</div>
              </div>
              <div>
                <h2>Pris</h2>
                <input
                  readOnly
                  type="text"
                  name="price"
                  className="price-read-only-input"
                  value={`${post.price}`}
                />
                <div className="input-explainer">kr</div>
              </div>
              <div>
                <h2>Beskrivning</h2>
                <textarea
                  readOnly
                  type="text"
                  name="description"
                  className="read-only-input"
                  value={`${post.description}`}
                />
              </div>
              <div>
                <h2>Bild</h2>
                <img
                  className="product-image"
                  key={post.image}
                  src={post.image}
                  alt="bild"
                />
              </div>
              <div>
                <h2>Plats för upphämtning</h2>
                <input
                  readOnly
                  type="text"
                  name="place"
                  className="read-only-input"
                  value={`${post.place}`}
                />
              </div>
              <div>
                <h2>Telefon</h2>
                <input
                  readOnly
                  type="text"
                  name="phone"
                  className="read-only-input"
                  value={`${post.phone}`}
                />
              </div>
            </div>
            <div className="buttons">
              <Link to={`/ConfirmPurchase/${post.id}`} className="buy-button">
                Köp
              </Link>
              <Link to="/BuyProducts" className="product-info-back-button">
                Gå tillbaka
              </Link>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ProductInfo;
