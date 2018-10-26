import React from 'react';
import {Link} from 'react-router-dom';

export default () =>  (
  <div className="About">

    <div className="section">
      <div className="center"><h2>Proficiencies</h2></div>
      <p>JavaScript, jQuery, React, Redux, Node, Express, MongoDB, Mongoose, C#, HTML, CSS, Sass, Bootstrap, MySQL, Visual Studio, Adobe Creative Suite, etc.</p>
    </div>
    <div className="section">
      <div className="center"><h2>Introduction</h2></div>
      <div>
        <p>I taught myself how to write software at age 11. I would spend hours upon hours growing up creating games and other applications with Visual Studio.</p>
        <p>I began getting into web develop during college. I graduated Texas A&amp;M University with an economics degree, and took several development classes while in college. </p>
        <p>Since then, I've continued to take courses through Udemy, while working on my own projects to develop my skills further.</p>
        <p>These days I do most of my coding in JavaScript, working with the React framework.</p>
        <p>I'm currently looking for a new position with a company that can benefit from my skills. Please feel free to email me at if you know of a potential opportunity.</p>
        <p className="center"><a href="mailto:jacobgarcia@aggienetwork.com">jacobgarcia@aggienetwork.com</a></p>
      </div>
    </div>
    <div className="links">
      <Link to="/" className="btn">Home</Link>
      <Link to="/portfolio" className="btn">Portfolio</Link>
      <Link to="/contact" className="btn">Contact</Link>
    </div>

  </div>
)