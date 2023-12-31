import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./styles/App.scss"
import "./styles/animations.scss";

function Reels(props) {
    return (
        <div>
            <Navbar />
            <br/>
            <br/>
            <section id="reels">
                <div class="reel-windows">
                    <div class="reel-window">
                        <iframe 
                            src="https://www.youtube.com/embed/g2VRNKxPSog?si=sBPb3rTElQG5c--Y" 
                            title="YouTube video player" 
                            class="video-reel"
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div class="reel-window">
                        <h2 class="slide-right">Reels</h2>
                    </div>
                    <div class="reel-window">
                     </div>
                    <div class="reel-window">
                        <iframe class="video-reel" src="https://www.youtube.com/embed/VpMbWhNU0o0?si=133lfJAZBglPHkrE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div class="reel-window">
                        <iframe class="video-reel" src="https://www.youtube.com/embed/KP8-ZIDf26I?si=c5v00Nj6WrSKeMu1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div class="reel-window">
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Reels;