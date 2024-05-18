import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer.jsx';

export default function App() {
  return (
    <>
      <NavBar />
          <ItemListContainer greeting={'🥳 Bienvenido a mi e-commerce 🛒'} />
      <Footer />
    </>
  );
}
