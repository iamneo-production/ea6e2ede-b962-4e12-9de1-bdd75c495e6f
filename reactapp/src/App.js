import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Navbar from './components/pages/Navbar';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/SignIn';
import Dashboard from './components/Dashboard/Dashboard';
import Cards from './components/Policy/Policies';


const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/nav" element={<Navbar/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/dash" element={<Dashboard/>} />
        <Route path="/policy_type" element={<Cards/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;