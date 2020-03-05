import React, {useState, useEffect} from 'react';
import { ICON_NAME } from "react-icons/ti";
import { TiHome } from 'react-icons/ti';
import { MdTagFaces } from 'react-icons/md';
import { IoMdCog } from 'react-icons/io';
import { MdContactMail } from 'react-icons/md';
import { MdEuroSymbol } from 'react-icons/md';
import { TiGroupOutline } from 'react-icons/ti';
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink } from 'react-router-dom';
import './HomePage.css'; 


const HomePage = props => {

    const [textInfo, setTextInfo] = useState("");

    useEffect(() => {
        animateText("Welcome to the Montrus Circus of WCS.");
    }, []);

    const animateText = (text) => {
        const splittedText = text.split(""); // ['b', 'o']
        let currentText = "";
        let index = 0;
        const anim = setInterval(() => {
            currentText += splittedText[index];
            setTextInfo(currentText);
            if (currentText.length === splittedText.length) {
                clearInterval(anim);
            } 
            index++;    
        }, 90);

        const scrollToRef = (AboutPage) => window.scrollTo(0, AboutPage.current.offsetTop)   

        const ScrollDemo = () => {

        const AboutPage = AboutPage(null)
        const executeScroll = () => scrollToRef(AboutPage)
    }
}

    return (
        <div id="HomePage">
            
            <div className="nav-container">
            
                <nav className="nav-content">
                <nav role="navigation">
                        <div id="menuToggle">
                            <input type="checkbox" />
                                <span></span>
                                <span></span>
                                <span></span>
                            <ul id="menu">
                                <Link activeClass="active" to="HomePage" spy={true} smooth={true} offset={-126} duration= {900}><li><TiHome/>  Home</li></Link>
                                <Link activeClass="active" to="PerformancesPage" spy={true} smooth={true} offset={-126} duration= {900}><li><IoMdCog/>  Performances</li></Link>
                                <Link activeClass="active" to="AboutUsPage" spy={true} smooth={true} offset={-126} duration= {900}><li><MdTagFaces/>  About Us</li></Link>
                                <Link activeClass="active" to="PricesPage" spy={true} smooth={true} offset={-126} duration= {900}><li><MdEuroSymbol/>  Prices</li></Link>
                                <Link activeClass="active" to="ContactPage" spy={true} smooth={true} offset={-126} duration= {900}><li><MdContactMail/>  Contact</li></Link>
                            </ul>
                        </div>
                    </nav>
                    
                    <Link activeClass="active" to="HomePage" spy={true} smooth={true} offset={-126} duration= {900}><ul>Home</ul></Link>
                    <Link activeClass="active" to="PerformancesPage" spy={true} smooth={true} offset={-126} duration= {900}><ul>Performances</ul></Link>
                    <Link activeClass="active" to="AboutUsPage" spy={true} smooth={true} offset={-126} duration= {900}><ul>About Us</ul></Link>
                    <Link activeClass="active" to="PricesPage" spy={true} smooth={true} offset={-126} duration= {900}><ul>Prices</ul></Link>
                    <Link activeClass="active" to="ContactPage" spy={true} smooth={true} offset={-126} duration= {900   }><ul>Contact</ul></Link>
                    <RouterLink to="/signup" className="submitAndSignIn">
                        <h3>Connexion</h3>
                    </RouterLink>
                    <RouterLink to="/signin" className="submitAndSignIn">
                        <h3>Inscription</h3>
                    </RouterLink>
                </nav>
            </div>
            <div className="frame">
                <h1>HELLO !</h1>
                    <br></br>
                    <br></br>
                    <div className="Description-text">
                            {textInfo}
                    </div>
            </div> 
            <div className="middle">
                <div className="mouse">
                    
                </div>
            </div>
        </div>
        

    );
}

export default HomePage;