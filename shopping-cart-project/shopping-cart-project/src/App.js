import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home'
import CartPage from './pages/CartPage';

function App() {
  return (
    <div className="App">
      <NavBar/>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cart' element={<CartPage/>}></Route>
    </Routes>

    </div>
  );
}

export default App;
