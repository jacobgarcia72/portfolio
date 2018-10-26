import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Splash from './components/Splash';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="bg-image">
        <div className="bg-cover">
          <Route exact path="/" component={ Splash } />
          <Route exact path="/about" component={ About } />
          <Route exact path="/portfolio" component={ Portfolio } />
          <Route exact path="/contact" component={ Contact } />
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
