import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { formatPrice } from "../data/products.js";

export default function CartSummary() {
  const { totalItems, totalPrice } = useCart();
  return (
    <div className="summary">
      <span>Cart: {totalItems} {totalItems === 1 ? "Item" : "Items"}</span>
      <strong>Total: {formatPrice(totalPrice)}</strong>
      <Link className="btn" to="/cart">Checkout</Link>
    </div>
  );
}
