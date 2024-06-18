import App from '../../App';
import CartProvider from './context/CartProvider.jsx';

const AppRouter = () => {
  return (
    <CartProvider>
      <App />
    </CartProvider>
  );
};

export default AppRouter;
