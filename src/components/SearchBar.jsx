// Controlled form input (Forms + Events + Props)
export default function SearchBar({ value, onChange }) {
  return (
    <form className="field" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        type="text"
        placeholder="e.g. Laptop"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </form>
  );
}
