// Product ID, Name, Category, Price, Quantity (stock), Image
// Replace the emoji in `image` with a file path (e.g. "/images/laptop.jpg") if you have real photos.
export const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 55000, quantity: 5, image: "💻", description: "15.6-inch laptop with 16GB RAM and 512GB SSD." },
  { id: 2, name: "Mouse", category: "Electronics", price: 800, quantity: 25, image: "🖱️", description: "Wireless optical mouse with a silent click." },
  { id: 3, name: "Chair", category: "Furniture", price: 4500, quantity: 8, image: "🪑", description: "Ergonomic office chair with lumbar support." },
  { id: 4, name: "Notebook", category: "Stationery", price: 100, quantity: 100, image: "📓", description: "200-page ruled notebook, A5 size." },
  { id: 5, name: "Desk Lamp", category: "Furniture", price: 1200, quantity: 0, image: "💡", description: "LED desk lamp with adjustable brightness." },
  { id: 6, name: "Pen Set", category: "Stationery", price: 250, quantity: 40, image: "🖊️", description: "Pack of 10 gel pens in assorted colours." },
];

export const formatPrice = (n) => "₹" + n.toLocaleString("en-IN");
