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
        <p>Hey there! My name's Jacob, and I'm a fullstack developer.</p>
        <p>I currently work as a web development TA for a coding boot camp, where I help JavaScript, jQuery, React, etc. to UT students</p>
        <p>I've been developing software for a long time&mdash;I taught myself at age 11! I would spend hours at a time growing up creating games and other applications with Visual Studio.</p>
        <p>I began getting into web develop during college. I graduated Texas A&amp;M University with an economics degree, and took several development classes while in college. </p>
        <p>Since then, I've continued to expand on my skills, taking courses through Udemy, while continuing to work on my own projects.</p>
        <p>These days I do most of my coding in JavaScript, working with the React framework. Check out my <Link to="/portfolio">portfolio</Link> for samples of my recent work!
        </p>
        <p>I'm really excited about my latest project&mdash;
          <a
            href="https://partyhouse.tv/"
            target="_blank"
            rel="noopener noreferrer"
          >Party House Games</a>
          &mdash;a collection of interactive, multiplayer games built in React, connecting up to 16 players to the room!
        </p>
        <p>I'm currently looking for a new position with a company that can benefit from my skills. Please feel free to email me at if you know of a potential opportunity.</p>
        <p className="center"><a href="mailto:jacobgarcia@aggienetwork.com">jacobgarcia@aggienetwork.com</a></p>

        <a className="btn" id="yelp" href="/Garcia.Jacob.Resume.pdf"  rel="noopener noreferrer" target="_blank">
          Resume
        </a>

      </div>
    </div>

  </div>
)