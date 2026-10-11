import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function Navbar() {
  const { totalItems } = useCart();
  return (
    <header className="navbar">
      <span className="brand">Product Store</span>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/cart">Cart ({totalItems})</NavLink>
      </nav>
    </header>
  );
}
