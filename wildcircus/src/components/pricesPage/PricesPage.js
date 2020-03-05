import React, {useState, useEffect, Component,} from 'react';
import './PricesPage.css'; 
import { Link } from 'react-router-dom';


function PricesPage() {

    return (
        <div id="PricesPage">
            <div className="titlePrice">
                <div className="theSpan"><span></span></div>
                <h2>
                    Prices and booking
                </h2>
                <h4>
                <div className="info">
                    <p>Price: <br></br>-12 years old: 5€<br></br> +12 years old: 10€<br></br></p>
                </div>
                </h4>

                <div className="cards3-1">
                    <div className="theCards">
                        <Link to={{ pathname: '/signup' }}>
                            <div className="place"><h3>Paris</h3></div>
                        </Link>
                        <Link
                        to={{ pathname: '/signup' }}
                        className="img1"
                        />
                    </div>

                    <div className="theCards">
                
                        <Link to={{ pathname: '/signup' }}>
                            <div className="place">Madrid</div>
                        </Link>

                        <Link to={{ pathname: '/signup' }}>
                            <img
                            src={require('../pricesPage/images/2.jpg')}
                            alt="2"
                            className="img2"
                            />
                        </Link>
                    </div>
                    <div className="theCards">
                
                        <Link to={{ pathname: '/signup' }}>
                            <div className="place">Rome</div>
                        </Link>

                        <Link to={{ pathname: '/signup' }}>
                            <img
                            src={require('../pricesPage/images/3.jpg')}
                            alt="3"
                            className="img3"
                            />
                        </Link>
                    </div>
                </div>


                <div className="cards3-2">
                    <div className="theCards">
                
                        <Link to={{ pathname: '/signup' }}>
                            <div className="place">London</div>
                        </Link>

                        <Link to={{ pathname: '/signup' }}>
                            <img
                            src={require('../pricesPage/images/4.jpg')}
                            alt="4"
                            className="img4"
                            />
                        </Link>
                    </div>
                    <div className="theCards">
                
                        <Link to={{ pathname: '/signup' }}>
                            <div className="place">Bruxelles</div>
                        </Link>

                        <Link to={{ pathname: '/signup' }}>
                            <img
                            src={require('../pricesPage/images/5.jpg')}
                            alt="5"
                            className="img5"
                            />
                        </Link>
                    </div>
                    <div className="theCards">
                
                        <Link to={{ pathname: '/signup' }}>
                            <div className="place">Dublin</div>
                        </Link>

                        <Link to={{ pathname: '/signup' }}>
                            <img
                            src={require('../pricesPage/images/3.webp')}
                            alt="6"
                            className="img6"
                            />
                        </Link>
                    </div>
                </div>
            
            </div>
        </div>
        

    );
}



export default PricesPage;  