import "../components/styles/PurchaseConfirmed.css";
import { Link } from "react-router-dom";

const PurchaseConfirmed = () => {
  return (
    <div>
      <h1 className="purchase-confirmed-header">Ditt köp är bekräftat!</h1>
      <h3>Tack för att du använder TasteTheWaste</h3>
      <div className="buttons">
        <Link to="/" className="buy-button">
          Startsidan
        </Link>
      </div>
      <div className="tree-container">
        <img
          className="landing-page-tree"
          src={require("../components/images/colorful-natural-tree-vector-clipart.png")}
          alt="tree"
        />
      </div>
    </div>
  );
};

export default PurchaseConfirmed;
