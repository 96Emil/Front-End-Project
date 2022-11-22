import "../components/styles/BuyProducts.css";
import Products from "./Products";
import UseFetch from "./UseFetch";
import Footer from "./Footer";

const BuyProducts = () => {
  const { data: posts, loading } = UseFetch("http://localhost:8000/posts");

  return (
    <div className="buy-products-page">
      {loading && <div>Loading page...</div>}
      {posts && <Products posts={posts} />}
      <Footer />
    </div>
  );
};

export default BuyProducts;
