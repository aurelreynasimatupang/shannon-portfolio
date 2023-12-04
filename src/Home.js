import React from 'react';
import './App.scss';
import NavBarHome from "./NavBarHome";
import Footer from './Footer';

function Main(props) {
    return (
        <div>
            <NavBarHome />
            <header className="App-header">
                <h1>Louisa Shannon Tara</h1>
                <h2>Animation Student</h2>
                <video autoPlay loop muted plays-inline class="back-video">
                    <source src={require("./img/headervid.mp4")} />
                </video>
            </header>
            <div id="home">
                <h3>About</h3>
                <p>Graduate from The One Academy.</p>
            </div>
            <Footer />
        </div>
    );
}

export default Main;