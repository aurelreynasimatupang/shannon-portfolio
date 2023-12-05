import React from 'react';
import "./styles/App.scss";
import {Link} from "react-router-dom";

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
                        <li><Link to="/reels">Demo reels</Link></li>
                        <li><Link to="/illustrations">Illustrations</Link></li>
                        <li><Link href="/commission">Commission</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;