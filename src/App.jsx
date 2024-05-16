import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

export default function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'🥳 Bienvenido a mi e-commerce 🛒'} />
    </>
  );
}
