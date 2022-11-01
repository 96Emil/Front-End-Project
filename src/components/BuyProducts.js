import "../components/styles/BuyProducts.css";
import Products from "./Products";
import UseFetch from "./UseFetch";

const BuyProducts = () => {
  const { data: posts, loading } = UseFetch("http://localhost:8000/posts");

  return (
    <div className="buy-products-page">
      {loading && <div>Loading page...</div>}
      {posts && <Products posts={posts} />}
    </div>
  );
};

export default BuyProducts;
