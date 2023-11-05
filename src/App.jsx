import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/Cart/Cart";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
