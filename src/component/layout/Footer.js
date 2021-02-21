import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../home/css/headingStyle.css';

function Footer() {

    const [position, setPosition] = useState("fixed");
    const [marginBottom, setMargin] = useState("320px");

    return (
        <div>
            <footer className="text-center text-lg-start" style={{ backgroundColor: "black", bottom: 0, width: "100%" }}>

                <div className="container p-4">
                    <div className="row">

                        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase info" style={{ textAlign: "left", color: "white" }}>NITRO: Your Movie Search Partner</h5>
                            <br></br>
                            <p className="info" style={{ textAlign: "left", color: "#ea0c56" }}>
                                Suck on what movie you should watch tonight ? Checkout the latest movie reviews and ratings before you start your bling watch
                            </p>
                        </div>



                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase info" style={{ textAlign: "right", color: "white" }}>LATEST MOVIES</h5>
                            <br></br>
                            <ul className="list-unstyled mb-0 info" style={{ textAlign: "right", color: "white" }}>
                                <li>
                                    <Link to="/movie/tt3846674" style={{ color: "#ea0c56", textDecoration: "None" }}>To all the boys: Always and Forever</Link>
                                </li>
                                <li>
                                    <Link to="/movie/tt1270797" style={{ color: "#ea0c56", textDecoration: "None" }}>Venom</Link>
                                </li>
                                <li>
                                    <Link to="/movie/tt7512276" style={{ color: "#ea0c56", textDecoration: "None" }}>The Dig</Link>
                                </li>
                                <li>
                                    <Link to="/movie/tt13285880" style={{ color: "#ea0c56", textDecoration: "None" }}>A Glitch in the Matrix</Link>
                                </li>
                                <li>
                                    <Link to="/movie/tt11364376" style={{ color: "#ea0c56", textDecoration: "None" }}>Acasa, My Home</Link>
                                </li>
                            </ul>
                        </div>



                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-0 info" style={{ textAlign: "right", color: "white" }}>ALL TIME POPULAR</h5>
                            <br></br>
                            <ul className="list-unstyled info" style={{ textAlign: "right", color: "white" }}>
                                <li>
                                    <Link to="/movie/tt1285016" style={{ color: "#ea0c56", textDecoration: "None" }}>The social Network</Link>
                                </li>
                                <li>
                                    <Link to="/movie/tt0120338" style={{ color: "#ea0c56", textDecoration: "None" }}>Titanic</Link>
                                </li>
                                <li>
                                    <Link to="/movie/tt0068646" style={{ color: "#ea0c56", textDecoration: "None" }}>The Godfather</Link>
                                </li>
                                <li>
                                    <Link to="/movie/tt1825683" style={{ color: "#ea0c56", textDecoration: "None" }}>Black Panther</Link>
                                </li>
                                <li>
                                    <Link to="/movie/tt6155172" style={{ color: "#ea0c56", textDecoration: "None" }}>Roma</Link>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
                <div className="text-center p-3" style={{
                    fontFamily: "Arbutus Slab, serif",
                    fontSize: "20px",
                    fontWeight: "100",
                    textTransform: "none",
                    fontStyle: "normal",
                    textDecoration: "none",
                    lineHeight: "1.5em",
                    letterSpacing: "0px",
                    backgroundColor: "rgba(0, 0, 0, 0.2)"
                }}>
                    © 2020 Copyright:
    <a href="#" className="info" style={{ color: "#ea0c56", textDecoration: "None" }}> Nitro-Movies</a>
                </div>

            </footer>

        </div >
    )
}

export default Footer
