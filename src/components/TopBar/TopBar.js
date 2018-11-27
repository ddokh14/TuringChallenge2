import React, { Component } from 'react';
import './TopBar.css';
import Next from './Next.svg';
import IconButton from '../IconButton/IconButton';
import TopBarUser from '../TopBarUser/TopBarUser';

const user = {
    name: 'Giselle',
    lastname: 'Giselle',
    email: 'giselle@gmail.com'
}

class TopBar extends Component {
  render() {
    return (
        <div className="top-bar">
            <IconButton icon={Next} onClick={this.props.handleOpen}/>
            <TopBarUser name={user.name}/>
        </div>
    );
  }
}

export default TopBar;
