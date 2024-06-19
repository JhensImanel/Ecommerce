import { useContext } from "react";
import { CardMedia } from "@mui/material";
import CartContext from "../../context/cart/CartContext";

const ItemCart = ({ item }) => {
  const { id, name, image, quantity } = item;
  const { deleteItemCart } = useContext(CartContext);

  return (
    <>
      <div className="flex mt-14 ml-2 items-center">
        <span className="mr-2">x{quantity}</span>
        <CardMedia
          component="img"
          alt={name}
          image={image}
          style={{ height: "150px", width: "150px", objectFit: "contain" }}
        />
        <h3 className="mr-2">{name}</h3>
        <button
          className="ml-2 bg-red-500 text-white px-2 py-1 rounded-full"
          onClick={() => deleteItemCart(id)}
        >
          X
        </button>
      </div>
      <hr />
    </>
  );
};

export default ItemCart;
