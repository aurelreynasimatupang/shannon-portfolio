import React from 'react';
import Navbar from "./Navbar";
import Footer from './Footer';
import "./styles/App.scss";
import "./styles/card.scss";
import {Link} from "react-router-dom";

function Illus(props) {
    return (
        <div>
            <Navbar />
            <section id="illus">
                <br/>
                <br/>
                <h2>Illustration</h2>
                <div class="illus-gallery">
                    <div class="illus-gallery-2">
                        <div class="card card-landscape">
                            <img src={require("./img/img3.jpg")} alt="Illustration by Louisa Shannon Tara" title="Illustration by Louisa Shannon Tara"/>
                            <h3 class="fade-in-text">Color Study #1</h3>
                            <Link to="/commission" class="btn btn-purple fade-in-text">Commission This</Link>
                        </div>
                        <div class="card card-landscape">
                            <img src={require("./img/img2.jpg")} alt="Illustration by Louisa Shannon Tara" title="Illustration by Louisa Shannon Tara"/>
                            <h3 class="fade-in-text">Color Studey #2</h3>
                            <Link to="/commission" class="btn btn-purple fade-in-text">Commission This</Link>
                        </div>
                    </div>
                    <div class="illus-gallery-3">
                        <div class="card card-portrait">
                            <img src={require("./img/img4.jpg")} alt="Illustration by Louisa Shannon Tara" title="Illustration by Louisa Shannon Tara" />
                            <h3 class="fade-in-text">Illustration</h3>
                            <Link to="/commission" class="btn btn-purple fade-in-text">Commission This</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Illus;