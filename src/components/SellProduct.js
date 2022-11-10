import "../components/styles/SellProduct.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SellProduct = () => {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { product, quantity, price, description, image, place, phone };

    if (product === "") {
      alert("Product must be filled out");
      return false;
    } else if (quantity === "") {
      alert("Qunatity must be filled out");
      return false;
    } else if (price === "") {
      alert("Price must be filled out");
      return false;
    } else if (description === "") {
      alert("Description must be filled out");
      return false;
    } else if (place === "") {
      alert("Place must be filled out");
      return false;
    } else if (phone === "") {
      alert("Phone must be filled out");
      return false;
    }

    fetch("http://localhost:8000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    }).then(() => {
      console.log("new product added");
      navigate("/BuyProducts");
      alert("Din Annons är publicerad");
    });
  };
  return (
    <div className="product-info">
      <div>
        <h1>Sälj produkt</h1>
        <form onSubmit={handleSubmit}>
          <div className="product-info-container">
            <div className="product">
              <h2>Produkt</h2>
              <input
                type="text"
                name="product"
                className="input"
                placeholder="Produktnamn"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
              />
            </div>
            <div>
              <h2>Kvantitet</h2>
              <input
                type="text"
                name="quantity"
                className="input"
                placeholder="Produktens kvantitet"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div>
              <h2>Pris</h2>
              <input
                type="text"
                name="price"
                className="input"
                placeholder="Produktens pris"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <h2>Beskrivning</h2>
              <textarea
                type="text"
                name="description"
                className="input-text-area"
                placeholder="Beskrivning av produkten"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <h2>Bild URL</h2>
              <input
                type="text"
                name="image"
                className="input"
                placeholder="Bild URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div>
              <h2>Plats för upphämtning</h2>
              <input
                type="text"
                name="place"
                className="input"
                placeholder="Plats"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
              />
            </div>
            <div>
              <h2>Telefon</h2>
              <input
                type="text"
                name="phone"
                className="input"
                placeholder="Telefonnummer"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            {<button className="publish-button">Publicera</button>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellProduct;
