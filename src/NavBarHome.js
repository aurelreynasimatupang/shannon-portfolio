import "./styles/App.scss";
import "./styles/navbar.scss";
import {Link} from "react-router-dom";
import React, { useState, useEffect } from "react";

function Navbar(props) {
    const [color, setColor] = useState("white");
    const [logo, setLogo] = useState({'background':'none', 'transition': 'all 200ms ease;'})
    const [background, setBackground] = useState({'background-color':'rgba(245, 245, 245, 0)', 'transition': 'all 200ms ease;'})

  useEffect(() => {
    const handleScroll = () => {
       var scrollPosition = window.scrollY;
       var sectionOffset = document.getElementById("home").offsetTop;

      if (scrollPosition > sectionOffset) {
        setColor("#7844cc");
        setLogo({'background-color':'#7844cc','border-radius':'5px', 'transition': 'all 200ms ease;'});
        setBackground({'background-color':'rgba(245, 245, 245, 1)', 'transition': 'all 200ms ease;'})
      } else {
        setColor("white");
        setLogo({'background':'none', 'transition': 'all 200ms ease;'})
        setBackground({'background-color':'rgba(245, 245, 245, 0)', 'transition': 'all 200ms ease;'})
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    return (
      <nav class="nav-home" style={background}>
        <Link to="/" style={logo}><img src={require("./img/logo.png")} class="logo" alt="Louisa Shannon Tara"></img></Link>
        <ul>
          <li><Link to="/" style={{color}}>Home</Link></li>
          <li><Link to="/reels" style={{color}}>Demo Reels</Link></li>
          <li><Link to="/illustrations" style={{color}}>Illustrations</Link></li>
          <li><Link to="/sketches" style={{color}}>Commission</Link></li>
        </ul>
      </nav>
    );
}

export default Navbar;