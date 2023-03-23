import "./App.css";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <div>
      
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Routes>
      

      <Footer></Footer>
    </div>
  );
}

export default App;
