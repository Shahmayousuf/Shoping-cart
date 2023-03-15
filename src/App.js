import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/Cart/Cart";
import NavBar from "./Components/Navbar";
import { CartContextProvider } from "./context/./cart/./cartContext";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartContextProvider>
    </div>
  );
}

export default App;
