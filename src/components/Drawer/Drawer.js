import React, { Component } from 'react';
import IconButton from '../IconButton/IconButton';
import DrawerMenu from '../DrawerMenu/DrawerMenu';
import Arrow from './Arrow.svg';
import './Drawer.css';

class Drawer extends Component {
  render() {
    return (
        this.props.open ?
        <div className="drawer">
            <div className="drawer-header">
                <IconButton icon={Arrow} red onClick={this.props.handleClose}/>
            </div>
            <div className="drawer-content">
                <div className="drawer-content-title">
                    <h3>Giselle</h3>
                </div>
                <DrawerMenu handleClose={this.props.handleClose}/>
            </div>
        </div>
        :
        null 
    );
  }
}

export default Drawer;
