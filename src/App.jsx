import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/Cart/Cart";
import ShopContextProvider from "./Context/ShopContextProvider";

function App() {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
