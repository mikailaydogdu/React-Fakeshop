import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Product from './components/Product';
import { Route, Routes } from 'react-router-dom';
import User from './components/profile/User'
import Sepet from './components/Sepet';
import About from './components/About';
import AddProduct from './components/AddProduct';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/profile" element={<User />} />
        <Route exact path="/sepet" element={<Sepet/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/addProduct" element={<AddProduct/>} />
      </Routes>
    </>
  );
}

export default App;
