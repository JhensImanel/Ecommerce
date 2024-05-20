import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Card = ({ product: { title, image, price, description, stock } }) => {
  return (
    <Card className="max-w-80">
      <CardMedia component="img" alt={title} height="140" image={image} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="flex justify-between"
        >
          <span>{title}</span>
          <span className="text-blue-400">{price}</span>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions className="flex justify-between">
        <Box>
          <Button size="small">
            <AddShoppingCartIcon />
            <span className="ml-1 mt-[2px]">Comprar</span>
          </Button>
        </Box>
        <Box>
          <span className={`mr-2 ${stock ? 'text-green-500' : 'text-red-500'}`}>
            {stock ? 'Disponible' : 'No disponible'}
          </span>
        </Box>
      </CardActions>
    </Card>
  );
};

export default Card;
