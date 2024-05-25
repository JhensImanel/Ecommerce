import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList.jsx';

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState('');
  const { id: categoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/public/mocks/items.json');
        const data = await response.json();
        if (categoryId) {
          const filteredItems = data.filter((item) => item.category === categoryId);
          setItems(filteredItems);
          if (filteredItems.length > 0) {
            setCategory(filteredItems[0].category);
          } else {
            setCategory('');
          }
        } else {
          setItems(data);
        }
      } catch (error) {
        console.log('No se encontraron productos...', error);
      }
    };

    fetchData();
  }, [categoryId]);

  const greetingMessage =
    categoryId && category
      ? `Desde aquí podrás ver un listado de ${category}`
      : greeting;

  return (
    <div className="m-16">
      <h1 className="flex justify-center text-2xl pt-1 mb-[18px] font-dosis text-center">
        {greetingMessage}
      </h1>
      <div className="flex gap-10">
        {items.length === 0 ? <p>Cargando...</p> : <ItemList items={items} />}
      </div>
    </div>
  );
};

export default ItemListContainer;
