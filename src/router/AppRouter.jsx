import { BrowserRouter } from "react-router-dom";

import App from "../App.jsx"
import CartProvider from "../context/cart/CartProvider.jsx";

const AppRouter = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  )
}

export default AppRouter