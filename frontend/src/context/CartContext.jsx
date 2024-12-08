import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [filteredValue, setFilteredValue] = useState("All-Menu");
  const [cart, setCart] = useState(() => {
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  });

  const deleteItem = (id) => {
    const updatedCart = cart.filter((item) => item.pizzaId !== id);
    setCart(updatedCart);
  };

  const increaseItemQuantity = (id) => {
    // Use map to create a new array with updated item quantities
    const updatedCart = cart.map((item) => {
      if (item.pizzaId === id) {
        // Create a new object for the updated item to avoid mutation
        const updatedItem = {
          ...item,
          quantity: item.quantity + 1,
          totalPrice: item.price * (item.quantity + 1), // Recalculate total price
        };
        return updatedItem; // Return the updated item
      }
      return item; // Return unchanged item
    });
    setCart(updatedCart); // Update state with new cart
  };

  const decreaseItemQuantity = (id) => {
    const updatedCart = cart
      .map((item) => {
        if (item.pizzaId === id) {
          if (item.quantity > 1) {
            // Decrease quantity
            const updatedItem = {
              ...item,
              quantity: item.quantity - 1,
              totalPrice: item.price * (item.quantity - 1),
            };
            return updatedItem;
          } else {
            // If quantity is 1, we may want to remove the item
            return null; // Signal to remove the item
          }
        }
        return item;
      })
      .filter((item) => item !== null); // Filter out null items
    setCart(updatedCart);
  };

  const clearItems = () => setCart([]);

  const currentQuantity = (id) => {
    const item = cart.find((item) => item.pizzaId === id);
    return item ? item.quantity : 0;
  };

  const value = {
    cart,
    setCart,
    deleteItem,
    increaseItemQuantity,
    currentQuantity,
    decreaseItemQuantity,
    clearItems,
    filteredValue,
    setFilteredValue,
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const UseCartApi = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCartApi must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, UseCartApi };
