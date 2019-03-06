import React from 'react';
import {Link} from 'react-router-dom';

import Project from './ProjectCard';

export default () =>  (
  <div className="Portfolio center">
    
    <h1>Jacob Garcia's Portfolio</h1>
    <p>Click a website's title to view live.</p><p>All websites are built responsive and fully mobile-compatible.</p>
    
    <Project
      title="Party House Games"
      desc="Interactive, multiplayer game. Users join game via room code and interact using their own devices."
      tech="React, JavaScript, Firebase, Sass"
      captions={["Play with 3-16 players on separate devices","Real-time updates, interactive play"]}
      folder="partyhouse"
      repo="gamehouse"
      url="https://partyhouse.tv/"
    />
    <Project
      title="Log My Reps"
      desc="Fullstack React app. Users can securely log in with Google, build workout routines, track workout reps, etc."
      tech="React, JavaScript, Redux, Node, Express, MongoDB, Sass"
      captions={["Build & track workout cycle, routines, reps, etc.","Record and track progress for each exercise"]}
      folder="logmyreps"
      repo="logmyreps"
      url="https://www.logmyreps.com/"
    />
    <Project
      title="Candlelit Weddings"
      desc="Business website built with Bootstrap."
      tech="JavaScript, jQuery, CSS, Bootstrap"
      captions={["Landing page with video background","Styled for desktop, tablet, and phone"]}
      folder="clw"
      repo="candlelitweddings"
      url="https://candlelitweddings.com/"
    />
    <Project
      title="Jacob's Game House"
      desc="A collection of multiplayer party games built in JavaScript and jQuery."
      tech="JavaScript, jQuery, CSS"
      captions={["4 fully-developed games with clean design","Extensive application of JavaScript logic"]}
      folder="game"
      repo="Game"
      url="https://jacobgarcia72.github.io/Game/"
    />
    {/* <Project
      title="Pest Prevention Plans"
      desc="Business website for local pest control company."
      tech="React, JavaScript, Sass"
      captions={["Current work-in-progess."]}
      folder="pestpreventionplans"
      repo="pestpreventionplans"
    /> */}

    <div className="links">
      <Link to="/" className="btn">Home</Link>
      <Link to="/about" className="btn">About</Link>
      <Link to="/contact" className="btn">Contact</Link>
    </div>

  </div>
)