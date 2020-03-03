import React, { Component } from 'react';
import TurqoiseShoe from '../../Material/img/img/shoe_01.jpg';
import DarkBlueshoe from '../../Material/img/img/shoe_02.jpg';
import GreenShoe from '../../Material/img/img/shoe_03.jpg';
import BlackShoe from '../../Material/img/img/shoe_04.jpg';

const Shop = (props) => {
    return(
        <article className="row p-0 m-0">
            <aside className="col-3 yellow_sidebar_shop">
            <h2>shop</h2>
                    <h4>runinc shop</h4>
                    <p>Gratis fragt ved køb over kr. 500,-</p><br />
                    <ul>
                        <li>Nike</li>
                        <li>Adidas</li>
                        <li>Puma</li>
                        <li>Asics</li>
                        <li>Hummel</li>
                    </ul>
            </aside>
            <aside className="col-9">
                <section className="row black_box_shop">
                    <h4>shop</h4>
                </section>
                <section className="row"></section>
                <section className="row shoes">
                    <section className="col-4 turqoise_shoe">
                        <img src={TurqoiseShoe} />
                        <p>Puma Highland 3000 - Brown</p>
                    </section>
                    <section className="col-4 darkblue_shoe">
                        <img src={DarkBlueshoe} />
                        <p>Asics Free Street</p>
                    </section>
                    <section className="col-4 green_shoe">
                        <img src={GreenShoe} />
                        <p>New Balance Runner Bounce</p>
                    </section>
                </section>
                <section className="row">
                <section className="col-4 black_shoe">
                    <img src={BlackShoe} />
                    <p>New Balance New York 2018</p>
                </section>
                <section className="col-4 turqoise_shoe">
                <img src={TurqoiseShoe} />
                <p>Puma Highland 3000 - Brown</p>
                </section>
                <section className="col-4 black_shoe">
                    <img src={BlackShoe} />
                    <p>New Balance New York 2018</p>
                </section>
                </section>
            </aside>
        </article>
    )
}


export default Shop;