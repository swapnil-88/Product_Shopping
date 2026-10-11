import { useParams, Link, useNavigate } from "react-router-dom";
import { products, formatPrice } from "../data/products.js";
import { useCart } from "../context/CartContext.jsx";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p className="empty">Product not found. <Link to="/products">Back to products</Link></p>;
  }

  return (
    <section className="details">
      <div className="thumb big">{product.image}</div>
      <div>
        <h2>{product.name}</h2>
        <p className="muted">ID: {product.id} · {product.category}</p>
        <p>{product.description}</p>
        <p className="price">{formatPrice(product.price)}</p>
        <p className="muted">
          {product.quantity > 0 ? `${product.quantity} in stock` : "Out of stock"}
        </p>
        <div className="actions">
          <button className="btn ghost" onClick={() => navigate(-1)}>Back</button>
          <button className="btn" disabled={product.quantity === 0} onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}
