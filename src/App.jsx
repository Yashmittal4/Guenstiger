import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "../src/components/Layout/Layout.jsx"
import Home from "../src/components/Home/Home.jsx"
import Login from "../src/components/Auth/Login.jsx"
import Signup from "../src/components/Auth/Signup.jsx"

import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route index element={<Home />} />  
          <Route path="login" element={<Login />} /> 
          <Route path="signup" element={<Signup />} /> 
        
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
