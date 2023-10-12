import "./App.css";
import NavBar from './components/NavBar';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/Signup'
import DashBoard from './pages/Dashboard'
import { useState } from "react";

function App() {

  const [isLoggedIn, setisLoggedIn] = useState(false);

  return <div>
    <NavBar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>

    <Routes>
      <Route path="/" element={<Home/>}></Route> 
      <Route path="/login" element={<Login setisLoggedIn={setisLoggedIn}/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/dashboard" element={<DashBoard/>}></Route>
    </Routes>

  </div>;
}

export default App;

