import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const OrderContainer = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const docsRef = collection(db, 'items');
        const querySnapshot = await getDocs(docsRef);
        setOrders(
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex gap-2 mt-14 ml-2">
      <ul>
        {orders.map((order) => (
          <div key={order.id}>
            <li>{order.id}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default OrderContainer;
