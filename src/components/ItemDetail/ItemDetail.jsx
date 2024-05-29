import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount.jsx';

const ItemDetail = ({ item }) => {
  const { name, image, price, description, stock } = item;

  return (
    <Card className="flex flex-col h-full sm:w-96 w-80 border-t-[5px] border-t-slate-950">
      <Box className="flex-grow flex justify-center items-center h-[250px]">
        <CardMedia
          component="img"
          alt={name}
          image={image}
          style={{ height: '250px', width: '250px', objectFit: 'contain' }}
        />
      </Box>
      <div className="flex justify-center my-2">
        <strong className='font-dosis'>{name}</strong>
      </div>
      <span className="flex m-0 justify-center">{price}</span>
      <CardContent className="text-justify flex-grow">
        <Typography variant="body2" color="text.primary">
          {description}
        </Typography>
      </CardContent>
      <div className="flex justify-center items-center gap-2">
        <ItemCount className="flex justify-center" initial={1} stock={stock} />
        <Button className='hg' style={{background: 'white', color: 'green', border: '1px solid green', padding:'3px 4px 0px 4px', marginLeft: '6px'}}>Agregar al carrito</Button>
      </div>
      <div className="flex justify-center my-2">
        <Button>
          <Link to="/">
            Volver
          </Link>
        </Button>
      </div>
      <Typography
        variant="body2"
        color="text.secondary"
        className="py-2 text-center"
        style={{
          borderTop: '1px solid',
          borderColor: 'gray',
          width: '45%',
          margin: '0 auto',
        }}
      >
        Stock disponible: {stock}
      </Typography>
    </Card>
  );
};

export default ItemDetail;
