import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer.jsx";
import ItemCartContainer from "./components/ItemCartContainer/ItemCartContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import OrderContainer from "./components/OrderContainer/OrderContainer.jsx";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-white bg-gray-900">
      <NavBar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Desde aquí podrás ver un listado de todas las categorías"} />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<ItemCartContainer />} />
          <Route path="/orders" element={<OrderContainer />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
