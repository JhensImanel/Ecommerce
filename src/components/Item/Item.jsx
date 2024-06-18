import { Link } from "react-router-dom";
import { Box, Card, CardMedia, Typography } from "@mui/material";

const Item = ({ item }) => {
  const { id, name, image, description, stock } = item;

  return (
    <Card className="flex flex-col h-full dark:bg-white bg-gray-800">
      <div className="dark:bg-gray-200 bg-black border-b border-gray-300 dark:border-gray-600  pb-1.5 pt-2.5 text-center">
        <Typography variant="body2" color="text.secondary">
          <span className="dark:text-gray-900 text-gray-100">{name}</span>
        </Typography>
      </div>

      <Box className="flex-grow flex justify-center items-center dark:bg-white bg-gray-800 h-[250px]">
        <CardMedia
          component="img"
          alt={name}
          image={image}
          style={{ height: "250px", width: "250px", objectFit: "contain" }}
        />
      </Box>

      <div className="dark:bg-white bg-gray-800">
        <div className="text-pretty text-center flex-grow mx-4 mt-4 mb-0 ">
          <Typography variant="body2" color="text.primary">
            <span className="dark:text-gray-900 text-white">{description}</span>
          </Typography>
        </div>

        <div className="flex justify-center mb-3 mt-2 ">
          <Box className="border dark:border-blue-500 border-dark rounded-lg">
            <Link to={`/item/${id}`}>
              <button className="py-[2px] px-[7px] items-center text-center rounded-md hover:text-black dark:hover:text-white dark:text-blue-500 text-white bg-gray-800 dark:bg-white dark:hover:bg-blue-500 hover:bg-white">
                <span className="transition duration-100 capitalize text-base font-normal font-dosis">
                  Previsualizar
                </span>
              </button>
            </Link>
          </Box>
        </div>
      </div>

      <Typography
        variant="body2"
        color="text.secondary"
        className="dark:bg-gray-200 bg-black border-t dark:border-gray-300 border-gray-600 pb-2 pt-2.5 text-center"
      >
        <span className="dark:text-gray-900 text-gray-100">
          Stock disponible: {stock}
        </span>
      </Typography>
    </Card>
  );
};

export default Item;
