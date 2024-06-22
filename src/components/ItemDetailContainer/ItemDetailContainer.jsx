import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import ItemDetail from "../ItemDetail/ItemDetail.jsx";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const docRef = doc(db, "items", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No existe tal documento!");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="flex justify-center h-screen items-center -mb-14">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
