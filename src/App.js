import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Splash from './components/Splash';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={ Splash } />
          <Route exact path="/about" component={ About } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
