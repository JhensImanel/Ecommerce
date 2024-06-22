import { useState, useEffect } from 'react';

import CartContext from './CartContext';

const CartProvider = ({ children }) => { // -> custom provider
  const [cart, setCart] = useState([]);
  const [totalPriceCart, setTotalPriceCart] = useState(0);
  const [totalQuantityCart, setTotalQuantityCart] = useState([]);

  useEffect(() => {
    setTotalPriceCart(
      cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    ),
      setTotalQuantityCart(cart.reduce((acc, item) => acc + item.quantity, 0));
  }, [cart]);

  const addItemCart = ({ item: product }) => {
    const itemExists = cart.some((item) => item.id === product.id);
    if (itemExists) {
      cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + product.quantity,
          };
        }
      });
    } else {
      setCart((cart) => [...cart, product]);
    }
  };

  const deleteItemCart = (id) => {
    setCart(cart.filter((item) => item.id != id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        totalPriceCart,
        totalQuantityCart,
        addItemCart,
        deleteItemCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;