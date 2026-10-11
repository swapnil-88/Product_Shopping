export default function CategoryFilter({ categories, value, onChange }) {
  return (
    <div className="field">
      <label htmlFor="category">Category</label>
      <select id="category" value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="All">All</option>
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    </div>
  );
}
