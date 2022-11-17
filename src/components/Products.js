import { Link } from "react-router-dom";
import "../components/styles/BuyProducts.css";

/**
 * This function is mapping through objects using them as a parameter
 * @param {object} films using props films as a parameter from the list.js file
 * @returns a list of the properties, and makes them into links with the import Link from react router dom.
 */
const Products = ({ posts }) => {
  //mapping through the object list with javascript
  return (
    <div className="buy-products">
      <div className="buy-products-header">
        <h1>Köp produkter</h1>
      </div>

      <div className="buy-products-container">
        {posts.map((post) => (
          <div className="card">
            <div
              className="card-background-image"
              style={{
                backgroundImage: `url(${post.image})`,
              }}
            >
              <div className="card-header">
                <h3>{post.product}</h3>
              </div>
            </div>
            <div key={post.id}>
              <div className="card-info-1">
                <h3>
                  {post.quantity} kg
                  <br /> {post.price} kr
                </h3>
              </div>
              <div className="card-info-2">
                <h2>{post.place}</h2>
              </div>
              <div className="info-button-card-1">
                <Link
                  to={`/ProductInfo/${post.id}`}
                  className="info-button-click"
                >
                  Information
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
