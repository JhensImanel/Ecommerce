import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/public/mocks/items.json');
        const data = await response.json();
        if (id) {
          const itemId = parseInt(id, 10); // Convertir el ID a número
          const filteredItem = data.find((item) => item.id === itemId);
          setItem(filteredItem);
        } else {
          console.log('No se proporcionó un id válido.');
        }
      } catch (error) {
        console.log('No se encontraron productos...', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="flex justify-center items-center h-full mt-24">
      {!item ? <p>Cargando...</p> : <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;
