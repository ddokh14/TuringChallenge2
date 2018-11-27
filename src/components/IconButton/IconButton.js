import React, { Component } from 'react';
import './IconButton.css';

//Reusable component for icon button.
class IconButton extends Component {
  render() {
    return (
        <div 
          className="icon" 
          style={{backgroundColor: this.props.red? "#dc412e" : "transparent"}}
          onClick={this.props.onClick}  
        >
            <img src={this.props.icon} className="icon-image" alt="icon"/>
        </div>
    );
  }
}

export default IconButton;
