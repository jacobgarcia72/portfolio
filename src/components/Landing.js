import React from 'react';
import {Link} from 'react-router-dom';


export default () =>  (
  <div className="Landing">


    <video controls poster="assets/cover.png">
      <source src="assets/portfolio.mp4" type="video/mp4 " />
      <source src="assets/portfolio.ogg" type="video/ogg" />
      Your browser does not support the video tag.
    </video>

      <div className="section">
        <img alt="Jacob Garcia" src="./assets/jacob.jpg" />
        <p><i className="fas fa-quote-left" />&nbsp;Hey there! My name's Jacob, and I'm a fullstack developer.&nbsp;<i className="fas fa-quote-right" /></p>
        <Link to="about" className="btn">About</Link>
      </div>
      <div className="section">
        <p><i className="fas fa-quote-left" />&nbsp;Jacob is the ideal team player...He truly brings out the best in his peers.&nbsp;<i className="fas fa-quote-right" /></p>
        <Link to="reviews" className="btn">Reviews</Link>
      </div>

  </div>
)