import React from 'react';
import './App.scss';

function Main(props) {
    return (
        <div>
            <header className="App-header">
                <h1>Louisa Shannon Tara</h1>
                <video autoPlay loop muted plays-inline class="back-video">
                    <source src={require("./img/headervid.mp4")} />
                </video>
            </header>
        </div>
    );
}

export default Main;