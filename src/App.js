import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import { Products } from './components/Products';
import { Product } from './components/Product';
import { Cart } from './components/Cart';
import { About } from './components/About';
import { Contact } from './components/Contact';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
