import { addDoc, getFirestore, collection } from 'firebase/firestore';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../../context/cart/CartContext';
import ItemCart from '../ItemCart/ItemCart';

const ItemCartContainer = () => {
  const { cart, totalPriceCart, clearCart } = useContext(CartContext);

  const navigate = useNavigate();

  const addOrder = async () => {
    const order = {
      buyer: {
        name: 'Jhens Imanel',
        phone: '936615284',
        email: 'u1836291@gmail.com',
      },
      items: cart,
      total: totalPriceCart(),
    };

    const db = getFirestore(); // Corrige el método aquí
    const docRef = collection(db, 'orders');
    await addDoc(docRef, order);
    clearCart();
    navigate('/orders');
  };

  return (
    <div>
      {cart.map((item) => (
        <ItemCart key={item.id} item={item} />
      ))}
      <p>Total: {totalPriceCart()}</p>
      <button onClick={addOrder}>Finaliza compra</button>
    </div>
  );
};

export default ItemCartContainer;
