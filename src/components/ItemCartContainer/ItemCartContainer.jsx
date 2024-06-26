import { useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import ItemCart from "../ItemCart/ItemCart";

const ItemCartContainer = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="mt-14">
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemCartContainer;
