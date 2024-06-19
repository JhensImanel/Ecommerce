import Item from '../Item/Item.jsx';
import ItemSkeleton from '../Item/ItemSkeleton.jsx';
import { Grid } from '@mui/material';

const ItemList = ({ items }) => {
  return (
    <Grid container spacing={5}>
      {items.length > 0 ? (
        items.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
            <Item item={item} />
          </Grid>
        ))
      ) : (
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ItemSkeleton />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default ItemList;
