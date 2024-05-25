import Item from '../Item/Item.jsx';
import { Grid } from '@mui/material';

const ItemList = ({ items }) => {
  return (
    <Grid container spacing={5}>
      {items.map((item) => (
        <Grid item xs={12} sm={6} md={3} key={item.id}>
          <Item item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemList;
