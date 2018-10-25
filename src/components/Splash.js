import React from 'react';
import {Link} from 'react-router-dom';

export default () =>  (
  <div className="Splash">
    <div className="image">
      <div className="cover">
        <h1>Jacob Garcia</h1>
        <h2>Austin Web Developer</h2>
        <div className="links">
          <Link to="/about" className="btn">About</Link>
          <Link to="/portfolio" className="btn">Portfolio</Link>
          <Link to="/contact" className="btn">Contact</Link>
        </div>
      </div>
    </div>
  </div>
)