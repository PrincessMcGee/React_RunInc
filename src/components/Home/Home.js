import React, { Component } from 'react';
import Hero from '../../Material/gfx/gfx/hero.jpg';
import Event from '../../Material/gfx/gfx/event.jpg';
import TurqoiseShoe from '../../Material/img/img/shoe_01.jpg';
import DarkBlueshoe from '../../Material/img/img/shoe_02.jpg';
import GreenShoe from '../../Material/img/img/shoe_03.jpg';
import BlackShoe from '../../Material/img/img/shoe_04.jpg';

const Home = (props) => {
    return(
        <div className="container">
            <img src={Hero} alt="Hero" id="hero" />
            <div className="hero_black_bar">
                <h4>we love <span className="yellow_text">running</span></h4>
            </div>
            <img src={Event} alt="Event" id="event" />
            <div className="event_black_bar">
                <h4>next event</h4>
            </div>
            <div className="event_yellow_sidebar">
                <h4>events</h4><br />
                <h5>copenhagen marathon</h5>
                <p>Den 29. maj 2018</p><br />
                <h5>aarhus city run</h5>
                <p>Den 1. juni 2018</p><br />
                <h5>berlin marathon</h5>
                <p>Den 6. juni 2018</p>
            </div>
            <div className="shoes">
                <div className="turqoise_shoe"><img src={TurqoiseShoe} alt="Turqoise shoe" id="turqoise_shoe" />Puma Highland 3000 - Brown</div>
                <div className="darkblue_shoe"><img src={DarkBlueshoe} alt="Dark blue shoe" id="darkblue_shoe" />Asics Free Street</div>
                <div className="green_shoe"><img src={GreenShoe} alt="Green shoe" id="green_shoe" />New Balance Runner Bounce</div>
                <div className="black_shoe"><img src={BlackShoe} alt="Black shoe" id="black_shoe" />New Balance New York 2018</div>
                <div className="turqoise_shoe"><img src={TurqoiseShoe} alt="Turqoise shoe" id="turqoise_shoe" />Puma Highland 3000 - Brown</div>
                <div className="black_shoe"><img src={BlackShoe} alt="Black shoe" id="black_shoe" />New Balance New York 2018</div>
            </div>
            <div className="yellow_box_shop">
                <div className="black_box_shop">
                <h4>shop</h4>
                </div>
                <h4>shop</h4>
                <h4>runinc shop</h4>
                <p>Gratis fragt ved køb over kr. 500,-</p>
                <ul>
                    <li>Nike</li>
                    <li>Adidas</li>
                    <li>Puma</li>
                    <li>Asics</li>
                    <li>Hummel</li>
                </ul>
            </div>
        </div>
    )
}

export default Home;