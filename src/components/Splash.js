import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class Splash extends Component {

  componentDidMount() {
    this.setTop();
    window.addEventListener('scroll', this.setTop);
    window.addEventListener('resize', this.setTop);
  }

  setTop = ()=> {
    let img = document.querySelector('.Splash .image');
    let whiteSpace = document.getElementById('white-space');
    if (!img) return;
    let height = 0;
    if (whiteSpace) height = parseInt(whiteSpace.style.height.concat(2));
    let top = height-Math.round(window.scrollY/2);
    img.style.top = `${top}px`;

  }

  render() {
    const path = this.props.location.pathname.substring(1);
    const caption = path ? path.charAt(0).toUpperCase().concat(path.substring(1)) : 'Home';

    return (
      <div className='Splash'>
        <div className="image" style={{'backgroundImage': `url("../assets/bg.jpg")`}}></div>
        <div className="cover">
          <div className="caption">{caption}</div>
        </div>
      </div>
    )
  }
}

export default withRouter(Splash);