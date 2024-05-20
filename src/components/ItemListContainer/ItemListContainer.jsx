import { useState, useEffect } from 'react';

import Product from '../Product/Product.jsx';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../mocks/products.json');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log('No se econtraron productos...', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {products.map((id, ...product) => (
        <div key={id}>
          <Product product={product} />
        </div>
      ))}
    </>
  );
};

export default ItemListContainer;
