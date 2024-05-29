import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <NavBar />
        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer
                  greeting={
                    'Desde aquí podrás ver un listado de todas las categorías'
                  }
                />
              }
            />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
