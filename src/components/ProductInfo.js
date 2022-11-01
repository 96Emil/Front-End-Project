import { useParams } from "react-router-dom";
import UseFetch from "./UseFetch";
import "../components/styles/ProductInfo.css";
import { Link } from "react-router-dom";

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
                readonly
                type="text"
                name="product"
                className="read-only-input"
                value={`${post.product}`}
              />
            </div>
            <div>
              <h2>Kvantitet</h2>
              <input
                readonly
                type="text"
                name="quantity"
                className="read-only-input"
                value={`${post.quantity}`}
              />
            </div>
            <div>
              <h2>Pris</h2>
              <input
                readonly
                type="text"
                name="price"
                className="read-only-input"
                value={`${post.price}`}
              />
            </div>
            <div>
              <h2>Beskrivning</h2>
              <input
                readonly
                type="text"
                name="description"
                className="read-only-input"
                value={`${post.description}`}
              />
            </div>
            <div>
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
                readonly
                type="text"
                name="place"
                className="read-only-input"
                value={`${post.place}`}
              />
            </div>
            <div>
              <h2>Telefon</h2>
              <input
                readonly
                type="text"
                name="phone"
                className="read-only-input"
                value={`${post.phone}`}
              />
            </div>
            <div className="buttons">
              <Link to="/BuyProducts" className="back-button">
                Gå tillbaka
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;