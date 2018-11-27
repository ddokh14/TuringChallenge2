import React, { Component } from 'react';
import './TopBarUser.css';

//Reusable component for user block in the top bar menu.
class TopBarUser extends Component {
  render() {
    return (
        <div className="top-bar-user">
            <div className="user-name"><span>{this.props.name}</span></div>
            <div className="user-image"></div>
        </div>
    );
  }
}

export default TopBarUser;
