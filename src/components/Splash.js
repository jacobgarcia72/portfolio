import React from 'react';
import {Link} from 'react-router-dom';

export default () =>  (
  <div className="Splash">


    <video controls poster="assets/cover.png">
      <source src="assets/portfolio.mp4" type="video/mp4 " />
      <source src="assets/portfolio.ogg" type="video/ogg" />
      Your browser does not support the video tag.
    </video>
    

    <div className="links">
      <Link to="/about" className="btn">About</Link>
      <Link to="/portfolio" className="btn">Portfolio</Link>
      <Link to="/contact" className="btn">Contact</Link>
    </div>
  </div>
)