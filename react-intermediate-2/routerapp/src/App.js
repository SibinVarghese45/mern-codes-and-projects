import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Support from './components/Support';
import Home from './components/Home';
import NotFound from './components/NotFound';
import About from './components/About';
import Labs from './components/Labs';
// import { Link } from 'react-router-dom';



function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
        </ul>
      </nav>
      
      {/* routes */}
        {/* <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/support" element={<Support/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/labs" element={<Labs/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes> */}

      {/* parent routing or nested routing */}
      <Routes>
          <Route path="/" element={<Home/>}>
            <Route path="/support" element={<Support/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/labs" element={<Labs/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Route>
        </Routes>


    </div>
  );
}


export default App;
