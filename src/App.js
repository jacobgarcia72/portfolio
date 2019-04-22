import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Splash from './components/Splash';
import Landing from './components/Landing';
import About from './components/About';
import Reviews from './components/Reviews';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ScrollToTop from './ScrollToTop';
import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Navbar />
          <Splash />
          <div className="page-content">
            <Route exact path="/" component={ Landing } />
            <Route exact path="/about" component={ About } />
            <Route exact path="/portfolio" component={ Portfolio } />
            <Route exact path="/contact" component={ Contact } />
            <Route exact path="/reviews" component={ Reviews } />
          </div>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
