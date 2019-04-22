import React, {Component} from 'react';
import {Link} from 'react-router-dom';



export default class Navbar extends Component {

  constructor(props) {
    super(props);

    this.state = {mobileDisplay:false}
  }

  componentDidMount() {
    const mobileDisplay = window.innerWidth <= 768;
    this.setMobile(mobileDisplay);
    window.addEventListener('scroll', this.setHeight);
    window.addEventListener('resize', this.setWidth);
  }

  setHeight = ()=> {
    let navbar = document.querySelector('.Navbar');
    if (!navbar || this.state.mobileDisplay) return;
    let height = 50;
    if (window.scrollY < 150) {
      height = 65 - Math.round(window.scrollY/10);
    }
    let links = document.getElementById('links');
    let whiteSpace = document.getElementById('white-space');
    height = `${height}px`;
    navbar.style.minHeight = height;
    navbar.style.lineHeight = height;
    links.style.lineHeight = height;
    whiteSpace.style.height = height;
  }

  setWidth = ()=> {
    const {mobileDisplay} = this.state;
    if (mobileDisplay && window.innerWidth > 768) {
      this.setMobile(false);
    } else if (!mobileDisplay && window.innerWidth <= 768) {
      this.setMobile(true);
    }
  }

  setMobile = mobileDisplay=> {
    let navbar = document.querySelector('.Navbar');
    let menuIcon = document.getElementById('menu-icon');
    let links = document.getElementById('links');
    let whiteSpace = document.getElementById('white-space');

    this.setState({mobileDisplay});

    if (mobileDisplay) {
      links.style.display = 'none';
      menuIcon.style.display = 'block';
      navbar.style.minHeight = '50px';
      navbar.style.lineHeight = '50px';
      whiteSpace.style.height = '50px';
      links.style.lineHeight = '15vh';
    } else {
      links.style.display = 'flex';
      menuIcon.style.display = 'none';
      this.setHeight();
    }
  }

  toggleMenu = ()=> {
    if (!this.state.mobileDisplay) return;
    let links = document.getElementById('links');
    let {display} = links.style;
    display = display==='none' ? 'flex' : 'none';
    links.style.display = display;
  }

  render() {

    return (
      <div>
        <div className='Navbar'>

          <div id="menu-icon" onClick={this.toggleMenu}><i className="fas fa-bars"></i></div>

          <div className="content">
            <div className="home">
              <Link to="/">Jacob Garcia</Link>
            </div>

            <div className="links" id="links" onClick={this.toggleMenu}>
              {this.state.mobileDisplay ? <Link to="/">Home</Link> : null}
              <Link to="/about">About</Link>
              <Link to="/reviews">Reviews</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/contact">Contact</Link>
            </div>

          </div>
        </div>

        <div id="white-space"></div>
      </div>
    )
  }
}


