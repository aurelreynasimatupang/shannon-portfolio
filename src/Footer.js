import React from 'react';
import "./styles/App.scss";

function Footer(props) {
    return (
        <div id="footer">
            <div class="boxes">
                <div class="box">
                    <h4>Contact me</h4>
                    <p>
                        <a href="https://www.instagram.com/shannonnntara/" target='_blank' title="Louisa Shannon Tara Instagram" rel="noreferrer"><i class="icon-ig"></i></a>
                        <a href="https://www.artstation.com/shannipanini/" target="_blank" title="Louisa Shannon Tara Art Station" rel="noreferrer"><i class="icon-as"></i></a></p>
                    <p><i class="icon-advanced"></i> 2023</p>
                </div>
                <div class="box">
                    <h4>About Me</h4>
                    <p>Bachelors animation student from Indonesia. </p>
                </div>
                <div class="box">
                    <h4>Navigate</h4>
                    <ul>
                        <li><a href="/reels">Demo reels</a></li>
                        <li><a href="/illustrations">Illustrations</a></li>
                        <li><a href="/commission">Commission</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;