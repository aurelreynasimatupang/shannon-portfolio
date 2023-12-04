import React from 'react';
import './App.scss';
import {Link} from "react-router-dom";

function Navbar(props) {
    return (
      <nav>
        <Link to="/"><img src={require("./img/logo.png")} class="logo" alt="Louisa Shannon Tara"></img></Link>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/reels">Demo Reels</Link></li>
          <li><Link to="/illustrations">Illustrations</Link></li>
          <li><Link to="/sketches">Sketches</Link></li>
        </ul>
      </nav>
    );
}

export default Navbar;