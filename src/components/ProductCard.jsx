import { Link } from "react-router-dom";
import { formatPrice } from "../data/products.js";
import { useCart } from "../context/CartContext.jsx";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const outOfStock = product.quantity === 0;

  return (
    <article className="card">
      <div className="thumb">{product.image}</div>
      <h3>{product.name}</h3>
      <p className="muted">{product.category}</p>
      <p className="price">{formatPrice(product.price)}</p>
      {/* Conditional rendering */}
      {outOfStock ? <p className="badge">Out of stock</p> : <p className="muted">{product.quantity} in stock</p>}
      <div className="actions">
        <Link className="btn ghost" to={`/products/${product.id}`}>View Details</Link>
        <button className="btn" disabled={outOfStock} onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </article>
  );
}
