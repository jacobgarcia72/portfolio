import React from 'react';

import Project from './ProjectCard';

export default () =>  (
  <div className="Portfolio center">
  
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
      title="Pest Prevention Plans"
      desc="Business website for local pest control company."
      tech="React, JavaScript, Sass"
      captions={["Landing page with professional design","Visually-appealing styles"]}
      folder="pestpreventionplans"
      repo="pestpreventionplans"
      url="https://pestpreventionplansatx.firebaseapp.com/"
    />
    <Project
      title="Log My Reps"
      desc="Fullstack React app. Users can securely log in with Google, build workout routines, track workout reps, etc."
      tech="React, JavaScript, Redux, Node, Express, MongoDB, Sass"
      captions={["Build & track workout cycle, routines, reps, etc.","Record and track progress for each exercise"]}
      folder="logmyreps"
      repo="logmyreps"
      url="#"
    />
    <Project
      title="Candlelit Weddings"
      desc="Business website built with Bootstrap."
      tech="JavaScript, jQuery, CSS, Bootstrap"
      captions={["Landing page with video background","Styled for desktop, tablet, and phone"]}
      folder="clw"
      repo="candlelitweddings"
      url="https://jacobgarcia72.github.io/candlelitweddings/"
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


  </div>
)