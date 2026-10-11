# Product Store

A Product Inventory and Shopping Cart application built with **React** and **React Router**.

**University:** GSFC University, School of Information Communication & Technology
**Course:** Computer Science and Engineering, Semester 5
**Subject:** AWT (Advanced Web Technologies)
**Submitted by:** [Your Name], [Enrollment No.]

## Features

- Display a list of products with image, name, category, price and stock
- Search products by name
- Filter products by category
- View full details of a product
- Add products to the cart
- Increase or decrease item quantity (limited to available stock)
- Remove products from the cart
- Calculate the cart total automatically
- Checkout form with name and address
- Out-of-stock products cannot be added to the cart
- Navigation between pages using React Router

## Tech Stack

- React 18 (ES6, JSX)
- React Router DOM v6
- Context API for cart state
- `useMemo` for filtering and cart totals
- CSS for styling
- Vite as the build tool

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/products` | Product List with Search and Category Filter |
| `/products/:id` | Product Details |
| `/cart` | Cart and Checkout |

## Project Structure

```
product-store/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── components/
    │   ├── Navbar.jsx
    │   ├── ProductCard.jsx
    │   ├── SearchBar.jsx
    │   ├── CategoryFilter.jsx
    │   └── CartSummary.jsx
    ├── context/
    │   └── CartContext.jsx
    ├── data/
    │   └── products.js
    └── pages/
        ├── Home.jsx
        ├── Products.jsx
        ├── ProductDetails.jsx
        └── Cart.jsx
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or later)
- npm (comes with Node.js)

### Installation

```bash
git clone https://github.com/swapnil-88/Product_Shopping.git
cd Product_Shopping
npm install
npm run dev
```

Open the link shown in the terminal (usually http://localhost:5173).

### Build for production

```bash
npm run build
```

## React Concepts Used

- ES6 syntax and JSX
- Functional components
- Props
- Event handling
- Conditional rendering
- Lists and keys
- Controlled forms
- React Router (`Routes`, `Route`, `NavLink`, `useParams`, `useNavigate`)
- Context API (`createContext`, `useContext`)
- `useState` and `useMemo`

## Author

[Your Name]
GitHub: [@swapnil-88](https://github.com/swapnil-88)