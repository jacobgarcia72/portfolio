import React from 'react';
import {Link} from 'react-router-dom';

export default () =>  (
  <div className="Contact">

    <div className="section center">
      <h2>Phone</h2>
      <p><a href="tel:254.541.3763">254.541.3763</a></p>
    </div>
    <div className="section center">
      <h2>Email</h2>
      <p><a href="mailto:jacobgarcia@aggienetwork.com">jacobgarcia@aggienetwork.com</a></p>
    </div>
    <div className="section center">
      <h2>LinkedIn</h2>
      <p><a href="https://www.linkedin.com/in/jacobtgarcia/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/jacobtgarcia/</a></p>
    </div>

    <div className="links">
      <Link to="/" className="btn">Home</Link>
      <Link to="/about" className="btn">About</Link>
      <Link to="/portfolio" className="btn">Portfolio</Link>
    </div>

  </div>
)