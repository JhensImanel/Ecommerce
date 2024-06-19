import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import CartContext from "../../context/cart/CartContext.jsx";
import ItemCount from "../ItemCount/ItemCount.jsx";

const ItemDetail = ({ item }) => {
  const { name, image, price, description, stock } = item;
  const [count, setCount] = useState(1);

  const { addItemCart } = useContext(CartContext);
  const navigate = useNavigate();

  const addItem = () => {
    addItemCart({ ...item, quantity: count });
    navigate("/cart");
  };

  return (
    <Card className="flex flex-col sm:w-96 dark:bg-white bg-gray-800 w-80 border-t-[5px] dark:border-t-slate-950 border-t-white">
      <Box className="flex-grow flex justify-center items-center h-[250px] dark:bg-white bg-gray-800">
        <CardMedia
          component="img"
          alt={name}
          image={image}
          style={{ height: "250px", width: "250px", objectFit: "contain" }}
        />
      </Box>
      <div className="dark:text-black text-white dark:bg-white bg-gray-800">
        <div className="flex justify-center mb-2">
          <strong className="font-dosis">{name}</strong>
        </div>
        <span className="flex m-0 justify-center">${price}</span>
        <CardContent className="text-justify mb-2 text-sm">
          <Typography variant="body2" color="text.secondary">
            <span className="dark:text-black text-white">{description}</span>
          </Typography>
        </CardContent>
        <div className="flex justify-center items-center gap-2">
          <ItemCount
            initial
            count={count}
            handleCount={setCount}
            stock={stock}
          />
          <button
            className="transition duration-300 ml-2 dark:hover:bg-green-600 font-normal hover:text-white dark:hover:text-white bg-white hover:bg-black text-black dark:text-green-600 py-[3px] rounded-md px-[6px] border-black border-[1.5px] dark:border-green-600"
            onClick={addItem}
          >
            Añadir al carrito
          </button>
        </div>
        <div className="flex justify-center my-2">
          <Link to="/">
            <Button sx={{ paddingBottom: "0px" }}>Volver</Button>
          </Link>
        </div>
        <Typography
          variant="body2"
          color="text.secondary"
          className="py-2 text-center"
          style={{
            borderTop: "1px solid",
            borderColor: "gray",
            width: "45%",
            margin: "0 auto",
          }}
        >
          <span className="dark:text-black text-white">
            Stock disponible: {stock}
          </span>
        </Typography>
      </div>
    </Card>
  );
};
  
export default ItemDetail;
