import { Link } from 'react-router-dom';
import { Box, Card, Button, CardMedia, Typography } from '@mui/material';

const Item = ({ item }) => {
  const { id, name, image, description, stock } = item;

  return (
    <Card className="flex flex-col h-full">
      <div className="bg-gray-200 border-b pb-1.5 pt-2.5 border-gray-300 text-center">
        <Typography variant="body2" color="text.secondary">
          <span>{name}</span>
        </Typography>
      </div>
      <Box className="flex-grow flex justify-center items-center h-[250px]">
        <CardMedia
          component="img"
          alt={name}
          image={image}
          style={{ height: '250px', width: '250px', objectFit: 'contain' }}
        />
      </Box>
      <div className="text-justify flex-grow mx-4 mt-4 mb-0">
        <Typography variant="body2" color="text.primary">
          {description}
        </Typography>
      </div>
      <div className="flex justify-center mb-3 mt-2">
        <Box className="border-blue-100 border rounded-md">
          <Button>
            <Link className="capitalize text-sm font-bold" to={`/item/${id}`}>
              Ver detalle del producto
            </Link>
          </Button>
        </Box>
      </div>
      <Typography
        variant="body2"
        color="text.secondary"
        className="bg-gray-200 border-t border-gray-300 pb-2 pt-2.5 text-center"
      >
        Stock disponible: {stock}
      </Typography>
    </Card>
  );
};

export default Item;
