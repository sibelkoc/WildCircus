import React, {useState, useEffect, Component,} from 'react';
import './PerformancesPage.css'; 


function PerformancesPage() {

    return (
        <div id="PerformancesPage">
            <h2>Performances</h2>
            <div className="cardsImage">
                <div className="cardsOne">
                    <div className="titleCardsOne">Laught</div>
                    <img
                    src={require('../performancesPage/images/laught.webp')}
                    alt="laught"
                    className="laughtImage"
                    />
                    <p>
                        As an adult,
                        come and discover our irresistible clowns,<br></br>between practical jokes and pranks let yourself be carried<br></br>away by their joy and fall back into childhood.
                    </p>
                </div>
                <div className="cardsTwo">
                    <div className="titleCardsTwo">Dream</div>
                    <img
                    src={require('../performancesPage/images/dream2.jpg')}
                    alt="dream"
                    className="dreamImage"
                    />
                    <p>
                    Let yourself be carried away in a world where the real and the imaginary are<br></br> one, in the company of our talented magicians, discover a wonderful world<br></br> limited only by your imagination.
                    </p>
                </div>
                <div className="cardsthree">
                    <div className="titleCardsThree">Marvel At</div>
                    <img
                    src={require('../performancesPage/images/marvelat.jpg')}
                    alt="marvelat"
                    className="marvelatImage"
                    />
                     <p>
                        Tame the untameable in the company of our tamers,<br></br> between roar and razor-sharp claws,
                        watch these fierce<br></br> felines turn into
                        sweet kittens.
                    </p>
                </div>

            </div>

             
        </div>
        

    );
}



export default PerformancesPage;  