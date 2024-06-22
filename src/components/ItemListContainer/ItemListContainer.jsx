import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import CartContext from "../../context/cart/CartContext.jsx";
import ItemList from "../ItemList/ItemList.jsx";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { id } = useParams();
  const context = useContext(CartContext);

  console.log(context);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const docsRef = collection(db, "items");
        const categoryID = id
          ? query(docsRef, where("category", "==", id))
          : docsRef;
        const querySnapshot = await getDocs(categoryID);
        setItems(
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const greetingMessage = id
    ? `Desde aquí podrás ver un listado de ${id}`
    : greeting;

  return (
    <div className="mx-16 mt-16 mb-12">
      <div className="text-2xl pt-1 mb-[18px] font-dosis text-center select-none dark:text-black text-white ">
        {greetingMessage}
      </div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;