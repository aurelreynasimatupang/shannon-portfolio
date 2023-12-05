import React from 'react';
import Navbar from "./Navbar";
import "./styles/App.scss"
import Footer from "./Footer";

function Commission(props) {
    return (
        <section id="comm">
            <Navbar />
            <br/>
            <br/>
            <h2>Commission</h2>
            <div class="comm-table">
                <table>
                    <thead>
                        <tr>
                            <th><span class="notice">Prices in USD/MYS</span></th>
                            <th>Head</th>
                            <th>Chest</th>
                            <th>Waist</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="table-head">Line Art</td>
                            <td>$10</td>
                            <td>$15</td>
                            <td>$20</td>
                        </tr>
                        <tr>
                            <td class="table-head">Cell Shading</td>
                            <td>$15</td>
                            <td>$20</td>
                            <td>$25</td>
                        </tr>
                        <tr>
                            <td class="table-head">Simple Render</td>
                            <td>$20</td>
                            <td>$25</td>
                            <td>$30</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </section>
    );
}

export default Commission;