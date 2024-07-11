import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

import Inventory from './components/Inventory';
import Orders from './components/Orders'

import './App.css';

function App(){
  return(
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/inventory">Inventory</Link></li>
            <li><Link to="/orders">Orders</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>

      </div>
    </Router>
  );
}

function Home(){
  return <h2>Welcome To The Ecommerce Dashboard</h2>
}

function About(){
  return <h2>About Information</h2>
}

export default App;