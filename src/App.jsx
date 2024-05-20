import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home.jsx';
import Microprocesador from './pages/Microprocesador.jsx';
import Monitor from './pages/Monitor.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import TarjetaDeVideo from './pages/TarjetaDeVideo.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <ItemListContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/monitores/:id" element={<Monitor />} />
          <Route path="/tarjetas-de-video/:id" element={<TarjetaDeVideo />} />
          <Route path="/microprocesadores/:id" element={<Microprocesador />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
