import { useState, useMemo } from "react";
import { products } from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";
import SearchBar from "../components/SearchBar.jsx";
import CategoryFilter from "../components/CategoryFilter.jsx";
import CartSummary from "../components/CartSummary.jsx";

export default function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => [...new Set(products.map((p) => p.category))], []);

  // useMemo: the list is re-filtered only when search or category changes
  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          p.name.toLowerCase().includes(search.trim().toLowerCase()) &&
          (category === "All" || p.category === category)
      ),
    [search, category]
  );

  return (
    <>
      <h2>Products</h2>
      <div className="filters">
        <SearchBar value={search} onChange={setSearch} />
        <CategoryFilter categories={categories} value={category} onChange={setCategory} />
      </div>

      {filtered.length === 0 ? (
        <p className="empty">No products match your search. Try a different name or category.</p>
      ) : (
        <div className="grid">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}

      <CartSummary />
    </>
  );
}
