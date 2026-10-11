import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { formatPrice } from "../data/products.js";

export default function Cart() {
  const { cart, changeQty, removeFromCart, clearCart, totalItems, totalPrice } = useCart();
  const [form, setForm] = useState({ name: "", address: "" });
  const [placed, setPlaced] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleCheckout = (e) => {
    e.preventDefault();
    setPlaced(true);
    clearCart();
  };

  if (placed) {
    return <p className="empty">Thanks, {form.name}! Your order has been placed. <Link to="/products">Keep shopping</Link></p>;
  }

  if (cart.length === 0) {
    return <p className="empty">Your cart is empty. <Link to="/products">Add some products</Link></p>;
  }

  return (
    <>
      <h2>Your Cart</h2>
      <ul className="cart-list">
        {cart.map(({ product, qty }) => (
          <li key={product.id}>
            <span className="thumb small">{product.image}</span>
            <div className="grow">
              <strong>{product.name}</strong>
              <div className="muted">{formatPrice(product.price)} each</div>
            </div>
            <div className="qty">
              <button onClick={() => changeQty(product.id, -1)} disabled={qty === 1} aria-label="Decrease quantity">−</button>
              <span>{qty}</span>
              <button onClick={() => changeQty(product.id, 1)} disabled={qty >= product.quantity} aria-label="Increase quantity">+</button>
            </div>
            <strong className="line">{formatPrice(product.price * qty)}</strong>
            <button className="btn ghost" onClick={() => removeFromCart(product.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <div className="summary">
        <span>Cart: {totalItems} {totalItems === 1 ? "Item" : "Items"}</span>
        <strong>Total: {formatPrice(totalPrice)}</strong>
      </div>

      <form className="checkout" onSubmit={handleCheckout}>
        <h3>Checkout</h3>
        <div className="field">
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" required value={form.name} onChange={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="address">Delivery address</label>
          <textarea id="address" name="address" required rows="3" value={form.address} onChange={handleChange} />
        </div>
        <button className="btn" type="submit">Place order</button>
      </form>
    </>
  );
}
