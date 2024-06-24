import { Link } from "react-router-dom";
import { Box, Card, CardMedia, Skeleton, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Item = ({ item }) => {
  const { id, name, image, description, stock } = item;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [item]);

  return (
    <>
      <Card className="flex flex-col h-full dark:bg-[#D8D9DB] bg-gray-800">
        <div className="dark:bg-gray-200 bg-black dark:pb-1.5 pb-1.5 dark:pt-2.5 pt-1.5 text-center border-b border-gray-300 dark:border-gray-600">
          {loading ? (
            <div className="items-center flex justify-center">
              <Skeleton
                animation="wave"
                variant="rounded"
                height={28}
                width={150}
              />
            </div>
          ) : (
            <Typography variant="body2" color="text.secondary">
              <span className="dark:text-gray-900 text-gray-100">{name}</span>
            </Typography>
          )}
        </div>

        <Box className="flex-grow flex justify-center items-center dark:bg-gray-100 bg-gray-800 h-[250px]">
          {loading ? (
            <Skeleton
              animation="wave"
              variant="rounded"
              height={250}
              width={250}
            />
          ) : (
            <CardMedia
              component="img"
              alt={name}
              image={image}
              style={{ height: "250px", width: "250px", objectFit: "contain" }}
            />
          )}
        </Box>

        <div className="dark:bg-gray-100 bg-gray-800">
          <div className="text-pretty text-center flex-grow mx-4 mt-4 mb-0 ">
            {loading ? (
              <Skeleton animation="wave" variant="rounded" height={67} />
            ) : (
              <Typography variant="body2" color="text.primary">
                <span className="dark:text-gray-900 text-white">
                  {description}
                </span>
              </Typography>
            )}
          </div>

          <div className="flex justify-center mb-3 mt-2 ">
            {loading ? (
              <Skeleton
                animation="wave"
                variant="rounded"
                height={28}
                width={95.11}
              />
            ) : (
              <Box className="border dark:border-blue-500 border-dark rounded-lg">
                <Link to={`/detail/${id}`}>
                  <button className="py-[2px] px-[4px] items-center text-center rounded-md hover:text-black dark:hover:text-white dark:text-blue-500 text-white bg-gray-800 dark:bg-gray-100 dark:hover:bg-blue-500 hover:bg-white">
                    <span className="transition duration-100 capitalize text-base font-normal">
                      Previsualizar
                    </span>
                  </button>
                </Link>
              </Box>
            )}
          </div>
        </div>

        {loading ? (
          <div className="dark:bg-gray-200 bg-black dark:pb-1.5 pb-0 dark:pt-2.5 pt-0 text-center justify-center flex">
            <Skeleton
              animation="wave"
              variant="rounded"
              height={28}
              width={150}
            />
          </div>
        ) : (
          <Typography
            variant="body2"
            color="text.secondary"
            className="dark:bg-[#D8D9DB] bg-black border-t dark:border-gray-300 border-gray-600 pb-2 pt-2.5 text-center"
          >
            <span className="dark:text-gray-900 text-gray-100">
              Stock disponible: {stock}
            </span>
          </Typography>
        )}
      </Card>
    </>
  );
};

export default Item;
