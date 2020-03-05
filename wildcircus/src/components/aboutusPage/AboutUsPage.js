import React, {useState, useEffect, Component,} from 'react';
import './AboutUsPage.css'; 


function AboutUsPage() {

    return (
        <div id="AboutUsPage">
            <h2>About Us</h2>
            <div className="AboutUsImage">
            <div className="cardsAboutUsImage">
                <div className="cardsUs">
                    <img
                    src={require('../aboutusPage/images/aboutUs.jpg')}
                    alt="aboutUs"
                    className="AboutImage"
                    />
                </div>
                <div className="ourHistory">
                    <h3>Our History: </h3>
                    <p>
                        The Monstrus crique was founded in 1950, it all started one evening after having a drink with friends,<br></br> the idea of founding a large circus and crisscrossing the earth. A joke come true ... A dream of friends come true.<br></br>
                        We started with ambitions, to share this dream, the idea to fascinate, to amaze ... <br></br>At the start we practiced in small châpiteaux and here we are today in front of you ...<br></br>
                        Today we are recognized as the best in the circus world.
                    </p>
                </div>
                </div>
            </div>
             
        </div>
        

    );
}



export default AboutUsPage;  