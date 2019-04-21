import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Splash from './components/Splash';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ScrollToTop from './ScrollToTop';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <div className="back">
            <Route exact path="/" component={ Splash } />
            <Route exact path="/about" component={ About } />
            <Route exact path="/portfolio" component={ Portfolio } />
            <Route exact path="/contact" component={ Contact } />
          </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
