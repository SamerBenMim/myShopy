import './App.css';
import Loading from './Pages/LoadingPage/Loading';
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
        <Navbar></Navbar>
  <Routes>

      <Route path="/products"  element={<Products />}/>
  <Route path="/" element={<Loading />}/>

   
  </Routes></BrowserRouter>


    </div>
  );
}

export default App;
