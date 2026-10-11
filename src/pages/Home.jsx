import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero">
      <h1>Everything for your desk, in one place.</h1>
      <p className="muted">Laptops, chairs, notebooks and more. Search, filter and build your cart.</p>
      <Link className="btn" to="/products">Browse products</Link>
    </section>
  );
}
