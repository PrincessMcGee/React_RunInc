import React, {Component}from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from '../src/components/Header/Navbar/Navbar';
import Event from '../src/components/NextEvent/Event';
import Home from '../src/components/Home/Home';
import Shop from '../src/components/Shop/Shop';
import Contact from '../src/components/ContactAndFooter/Contact';

function RunInc() {
  return (
    <BrowserRouter>
    <div className="RunInc">
      <Navbar />
        <Route path='/home' component={Home} />
        <Route path='/event' component={Event} />
        <Route path='/shop' component={Shop} />
        <Route path='/contact' component={Contact} />
    </div>
  </BrowserRouter>
  );
}

export default RunInc;