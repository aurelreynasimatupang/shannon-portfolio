import "./styles/App.scss";
import "./styles/navbar.scss";
import {Link} from "react-router-dom";
import React from "react";

function Navbar(props) {
    return (
      <nav class="nav-normal">
        <Link to="/"><img src={require("./img/logo.png")} class="logo" alt="Louisa Shannon Tara"></img></Link>
        <ul>
          <li><Link to="/" class="text-white">Home</Link></li>
          <li><Link to="/reels" class="text-white">Demo Reels</Link></li>
          <li><Link to="/illustrations" class="text-white">Illustrations</Link></li>
          <li><Link to="/commission" class="text-white">Commission</Link></li>
        </ul>
      </nav>
    );
}

export default Navbar;