
import React from 'react';

export default class ProjectCard extends React.Component {
  
  renderTitle() {
    if (this.props.url) {
      return (
        <h2>
          <a
            href={this.props.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.title}
          </a>
        </h2>
      )
    } else {
      return (
        <h2>
          {this.props.title}
        </h2>
      )
    }
  }

  renderScreenshots() {
    const {folder} = this.props;
    return this.props.captions.map((caption, i) => (
      <div key={i} className="screenshot">
        <a href={`./assets/screenshots/${folder}/${i}.png`}>
          <img src={`./assets/screenshots/${folder}/${i}.png`} alt={caption}/>
        </a>
        <p>{caption}</p>
      </div>
    ))
  }
  
  render() {
    return (
      <div className="ProjectCard">
    
        {this.renderTitle()}
        <a 
          className="repo" 
          href={`https://github.com/jacobgarcia72/${this.props.repo}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Repository
        </a>
        <div className="section center">
          <p className="desc">{this.props.desc}</p>
          <p className="tech">{this.props.tech}</p>
        </div>
        <div className="screenshots">
          {this.renderScreenshots()}
        </div>
      </div>
    )
  }
}
