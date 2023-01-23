import Header from "./Components/Header";
import Cart from "./Components/Cart";
import Lists from "./Components/Lists";
import { useSelector } from 'react-redux';

function App() {

  const cartIsVisible = useSelector(state => state.ui.cartIsVisible);

  return (
    <div className="app">
      <Header />

      {cartIsVisible && <Cart />}

      <Lists />
    </div>
  );
}

export default App;
