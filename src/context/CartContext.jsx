import { createContext, useContext, useState, useMemo } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]); // [{ product, qty }]

  const addToCart = (product) =>
    setCart((prev) => {
      const found = prev.find((i) => i.product.id === product.id);
      if (!found) return [...prev, { product, qty: 1 }];
      return prev.map((i) =>
        i.product.id === product.id && i.qty < product.quantity ? { ...i, qty: i.qty + 1 } : i
      );
    });

  const changeQty = (id, delta) =>
    setCart((prev) =>
      prev.map((i) =>
        i.product.id === id
          ? { ...i, qty: Math.min(i.product.quantity, Math.max(1, i.qty + delta)) }
          : i
      )
    );

  const removeFromCart = (id) => setCart((prev) => prev.filter((i) => i.product.id !== id));
  const clearCart = () => setCart([]);

  // useMemo: recalculated only when the cart changes
  const totalItems = useMemo(() => cart.reduce((s, i) => s + i.qty, 0), [cart]);
  const totalPrice = useMemo(() => cart.reduce((s, i) => s + i.qty * i.product.price, 0), [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, changeQty, removeFromCart, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}
