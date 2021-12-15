import "./App.css";
import Wellcome from "./Pages/WellcomePage/Wellcome";
import Routing from "./Routing";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Products from "./Pages/ProductsPage/Products";
import Navbar from "./Components/NavbarProducts/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Wellcome />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
