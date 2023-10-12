import { Route } from 'react-router-dom';
import NavBar from './components/Navbar'
import { Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Cart from './pages/Cart'

const App = () => {
  return (<div>
      <div>
        <NavBar></NavBar>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
  </div>);
};

export default App;
