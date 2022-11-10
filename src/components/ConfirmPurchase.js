import { useParams } from "react-router-dom";
import UseFetch from "./UseFetch";
import { Link } from "react-router-dom";

const ConfirmPurchase = () => {
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
        <div className="card">
          <h1>Vald produkt</h1>
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
            <div className="buttons">
              <Link to={`/Receipt/${post.id}`} className="buy-button">
                Bekräfta köp
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmPurchase;
