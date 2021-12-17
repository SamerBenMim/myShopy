import './App.css';
import Wlc from './Pages/LoadingPage/Wlc';
import Routing from './Routing';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import Products from './Pages/ProductsPage/Products';
import Navbar from './Components/NavbarProducts/Navbar';

function App() {
  return (
    <div className="App">
<BrowserRouter>
  <Routes>

       <Route path="/products"  element={<Products />}/>
       <Route path="/" element={<Wlc />}/>

   
  </Routes></BrowserRouter>


    </div>
  );
}

export default App;
