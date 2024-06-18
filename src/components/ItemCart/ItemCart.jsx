import { useContext } from 'react';
import CartContext from '../../context/cart/CartContext';

const ItemCart = ({ item }) => {
  const { id, name, quantity } = item;
  const { deleteItemCart } = useContext(CartContext);

  return (
    <div className="flex mt-14 ml-2 items-center">
      <span className="mr-2">x{quantity}</span>
      <h3 className="mr-2">{name}</h3>
      <button className="ml-2 bg-red-500 text-white px-2 py-1 rounded" onClick={() => deleteItemCart(id)}>
        X
      </button>
    </div>
  );
};

export default ItemCart;
