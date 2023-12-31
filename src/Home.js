import React from 'react';
import "./styles/App.scss";
import "./styles/animations.scss";
import NavBarHome from "./NavBarHome";
import Footer from './Footer';

function Main(props) {
    return (
        <div>
            <NavBarHome />
            <header className="App-header">
                <h3 class="animate-pop">•Animation•</h3>
                <h1 class="animate-pop">Louisa Shannon Tara</h1>
                <h2 class="animate-pop">Animation Student</h2>
                <video autoPlay loop muted plays-inline class="back-video">
                    <source src={require("./img/headervid.mp4")} />
                </video>
            </header>
            <section id="home">
                <h3>About</h3>
                <p>Graduate from The One Academy.</p>
                <div class="gallery">
                    <div class="gallery-bg m-0 p-0"> <img src={require("./img/img4.jpg")} alt="illustration by Louisa Shannon Tara" title="Illustration by Louisa Shannon Tara"/></div>
                    <div class="m-0 p-0">
                        <div class="gallery-sm w-100">
                            <div class="gallery-sm-pic"><img src={require("./img/img.jpg")} alt="character concept by Louisa Shannon Tara" title="character concept Louisa Shannon Tara"></img></div>
                            <div class="gallery-sm-pic"><img src={require("./img/img2.jpg")} alt="color study by Louisa Shannon Tara" title="color study by Louisa Shannon Tara"></img></div>
                            <div class="gallery-sm-pic"><img src={require("./img/img3.jpg")} alt="color study by Louisa Shannon Tara" title="color study by Louisa Shannon Tara"></img></div>
                            <div class="gallery-sm-pic"><video autoPlay loop muted plays-inline><source src={require("./img/spinny.mp4")} /></video></div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Main;