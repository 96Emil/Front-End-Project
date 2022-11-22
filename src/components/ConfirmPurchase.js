import { useParams } from "react-router-dom";
import UseFetch from "./UseFetch";
import { Link } from "react-router-dom";
import "../components/styles/ConfirmPurchase.css";
import Footer from "./Footer";

const ConfirmPurchase = () => {
  const { id } = useParams();
  const {
    data: post,
    error,
    isPending,
  } = UseFetch("http://localhost:8000/posts/" + id);

  const handleClick = () => {
    fetch("http://localhost:8000/posts/" + post.id, {
      method: "DELETE",
    }).then(() => {
      console.log("post deleted");
    });
  };

  return (
    <div className="receipt">
      <div className="confirm-purchase-header">
        <h1>Orderdetaljer</h1>
      </div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {post && (
        <div className="receipt-card">
          <div className="receipt-items">
            <div className="receipt-info">
              <h2 className="receipt-items-header">Din valda produkt</h2>
              <h3 className="receipt-item">{post.product}</h3>

              <div>
                <h2 className="receipt-item-headers">Kvantitet</h2>
                <h3 className="receipt-item">{post.quantity} kg</h3>
              </div>
              <div>
                <h2 className="receipt-item-headers">Pris</h2>
                <h3 className="receipt-item">{post.price} kr</h3>
              </div>
              <div>
                <h2 className="receipt-item-headers">Beskrivning</h2>
                <h3 className="receipt-item">{post.description}</h3>
              </div>
              <div>
                <h2 className="receipt-item-headers">Plats för upphämtning</h2>
                <h3 className="receipt-item">{post.place}</h3>
              </div>
              <div>
                <h2 className="receipt-item-headers">Telefonnummer</h2>
                <h3 className="receipt-item">{post.phone}</h3>
              </div>
              <div className="buttons">
                <Link
                  to="/PurchaseConfirmed"
                  className="confirm-button"
                  onClick={handleClick}
                >
                  Bekräfta
                </Link>
                <Link
                  to={`/ProductInfo/${post.id}`}
                  className="confirm-purchase-back-button"
                >
                  Gå tillbaka
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ConfirmPurchase;
