import React from 'react';
import './App.scss';
import NavBarHome from "./NavBarHome";
import Footer from './Footer';

function Main(props) {
    return (
        <div>
            <NavBarHome />
            <header className="App-header">
                <h3>•Animation•</h3>
                <h1>Louisa Shannon Tara</h1>
                <h2>Animation Student</h2>
                <video autoPlay loop muted plays-inline class="back-video">
                    <source src={require("./img/headervid.mp4")} />
                </video>
            </header>
            <div id="home">
                <h3>About</h3>
                <p>Graduate from The One Academy.</p>
                <div class="gallery w-100">
                    <div class="gallery-pic"><img src={require("./img/img.jpg")} alt="character concept by Louisa Shannon Tara" title="Louisa Shannon Tara"></img> </div>
                    <div class="gallery-pic"><img src={require("./img/img2.jpg")} alt="Color study Illustration by Louisa Shannon Tara" title="Color study Illustration by Louisa Shannon Tara"></img> </div>
                    <div class="gallery-pic"><img src={require("./img/img3.jpg")} alt="Color study Illustration by Louisa Shannon Tara" title="Color study Illustration by Louisa Shannon Tara"></img> </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Main;