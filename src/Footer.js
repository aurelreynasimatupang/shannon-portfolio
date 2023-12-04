import React from 'react';

function Footer(props) {
    return (
        <div id="footer">
            <div class="boxes">
                <div class="box">
                    <h4>Contact me</h4>
                    <p><i class="icon-ig"></i><i class="icon-fb"></i><i class="icon-li"></i></p>
                    <p><i class="icon-advanced"></i> 2023</p>
                </div>
                <div class="box">
                    <h4>About Me</h4>
                    <p>Animation student and other stuff. </p>
                </div>
                <div class="box">
                    <h4>Navigate</h4>
                    <ul>
                        <li><a href="/reels">Demo reels</a></li>
                        <li><a href="/illustrations">Illustrations</a></li>
                        <li><a href="/sketches">Sketches</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;