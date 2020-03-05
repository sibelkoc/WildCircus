import '../App.css';
import HomePage from './homePage/HomePage';
import PerformancesPage from './performancesPage/PerformancesPage';
import EmblaCarousel from "./CarouselSection/EmblaCarousel";
import Parallax, { Layer } from "react-parallax-scroll";
import "./CarouselSection/base.css";
import React  from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutUSPage from './aboutusPage/AboutUsPage';
import { Item } from "./Carousel2/components2";
import Carousel from "./Carousel2/Carousel";
import PricesPage from './pricesPage/PricesPage';
import Signin from './signForms/signin/Signin';
import Signup from './signForms/signup/Signup';
import ContactPage from './contactPage/ContactPage';
import Footer from './footer/Footer';

function Main() {
  
  return (
    <div>
      <HomePage />
      <PerformancesPage />
      <Parallax>
        <Layer id="img1" settings={{ speed: 2 }}>
          <div id="img1"></div>
      
        <EmblaCarousel autoplay delayLength={2500}>
        
          <div><div className="quote1">"Nothing happens unless first a dream"</div><br></br>
          <div class="seperator size-small height-2px">
          <span></span>
          </div><br></br>
          <div className="author">Carl Sandburg</div></div>
          <div><div className="quote2">"Keep the circus going inside you, keep it going, don't take anything too seriously, it'll all work out in the end."</div><br></br>
          <div class="seperator size-small height-2px">
            <span></span>
          </div><br></br>
          <div className="author">David Niven</div></div>
          <div><div className="quote3">"The circus is the only fun you can buy that is good for you."</div><br></br>
          <div class="seperator size-small height-2px">
            <span></span>
          </div><br></br>
          <div className="author">Ernest Hemingway</div></div>
        
        </EmblaCarousel>
        </Layer></Parallax>

        <AboutUSPage />

      <div className="carousel2">
        <Carousel title="Carousel">
          <Item img="https://cdn-media.otmont.vm.aiprod.com/original/RESLAR034V51JKYY/0-29683681-1625486380819707-3029349939962371077-n.jpg" />
          <Item img="https://www.bureaudescongres-montpellier.fr/var/ez_website/storage/images/media/images/congres/restaurants/le-circus2/324235-1-fre-FR/Le-Circus_format_580x670.jpg" />
          <Item img="https://ik.imagekit.io/youshould/tr:w-768,rt-auto/Bar/prod/444FD90B-1F9C-493A-AC7D-88974D5E51BF/20170720120741922/1500555162.jpg" />
        </Carousel>
        <div className="barText">
        <h3>
        A little thirsty ?!<br></br>
      For the good of our spectators, the Monstrus circus offers a mini bar<br></br> allowing you to refresh yourself before traveling with us ...
        </h3>
        </div>
      </div>
      <PricesPage />
      <ContactPage/>
      <Footer/>
      
      </div>
      
  );
}

export default Main;
