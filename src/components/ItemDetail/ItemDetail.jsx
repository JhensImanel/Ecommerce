import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount.jsx";
import CartContext from "../../context/cart/CartContext.jsx";

const ItemDetail = ({ item, loading }) => {
  const [count, setCount] = useState(1);
  const { addProduct } = useContext(CartContext);

  const addProductCart = () => {
    addProduct({ ...item, quantity: count });
  };

  const { name, image, price, description, stock } = item || {};

  return (
    <Card className="flex flex-col sm:w-96 dark:bg-white bg-gray-800 w-80 border-t-[5px] dark:border-t-slate-950 border-t-white">
      <Box className="flex-grow flex justify-center items-center h-[250px] dark:bg-white bg-gray-800">
        {loading ? (
          <Skeleton animation="wave" variant="rounded" width={250} height={246} />
        ) : (
          <CardMedia
            component="img"
            alt={name}
            image={image}
            style={{ height: "250px", width: "250px", objectFit: "contain" }}
          />
        )}
      </Box>

      <div className="dark:text-black text-white dark:bg-white bg-gray-800">
        <div className="flex justify-center mb-2">
          {loading ? (
            <Skeleton animation="wave" variant="rounded" width={109.02} height={24} />
          ) : (
            <strong className="font-dosis">{name}</strong>
          )}
        </div>

        {loading ? (
          <Skeleton animation="wave" variant="rounded" width={70} height={24} />
        ) : (
          <span className="flex m-0 justify-center">${price}</span>
        )}

        <CardContent className="text-justify mb-2 text-sm">
          {loading ? (
            <Skeleton animation="wave" variant="rounded" width={352} height={70} />
          ) : (
            <Typography variant="body2" color="text.secondary">
              <span className="dark:text-black text-white">{description}</span>
            </Typography>
          )}
        </CardContent>

        <div className="flex justify-center items-center gap-2">
          {loading ? (
            <>
              <Skeleton animation="wave" variant="circular" width={22.41} height={24} />
              <Skeleton animation="wave" sx={{ marginX: "8px" }} variant="rectangular" width={10} height={24} />
              <Skeleton animation="wave" variant="circular" width={22.41} height={24} />
            </>
          ) : (
            <ItemCount initial count={count} handleCount={setCount} stock={stock} />
          )}

          {loading ? (
            <Skeleton animation="wave" sx={{ marginLeft: "8px" }} variant="rounded" width={126.48} height={32} />
          ) : (
            <button
              className="transition duration-300 ml-2 dark:hover:bg-green-600 font-normal hover:text-white dark:hover:text-white bg-gray-800 dark:bg-white hover:bg-[#1976D2] text-[#1976D2] dark:text-green-600 py-[3px] rounded-md px-[6px] border-[#1976D2] border-[2px] dark:border-green-600"
              onClick={addProductCart}
            >
              Añadir al carrito
            </button>
          )}
        </div>

        <div className="flex justify-center my-2">
          {loading ? (
            <Skeleton animation="wave" variant="rounded" width={68.67} height={30.5} />
          ) : (
            <Link to="/">
              <Button sx={{ paddingBottom: "0px" }}>Volver</Button>
            </Link>
          )}
        </div>

        {loading ? (
          <Skeleton animation="wave" variant="text" width={128.36} height={28.34} />
        ) : (
          <Typography
            variant="body2"
            color="text.secondary"
            className="py-2 text-center"
            style={{ borderTop: "1px solid", borderColor: "gray", width: "45%", margin: "0 auto" }}
          >
            <span className="dark:text-black text-white">
              Stock disponible: {stock}
            </span>
          </Typography>
        )}
      </div>
    </Card>
  );
};

export default ItemDetail;
