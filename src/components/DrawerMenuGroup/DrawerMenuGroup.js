import React, { Component } from 'react';
import './DrawerMenuGroup.css';
import { Link } from "react-router-dom";


class DrawerMenuGroup extends Component {
  render() {
    return (
        <div className="menu-group">
            <div className="menu-group-title">{this.props.title}</div>
            {this.props.list.map((item,index) => 
                <Link to={item.route} key={index} className="menu-group-item" onClick={this.props.handleClose}>
                    {item.name}
                </Link>
            )}
        </div>
    );
  }
}

export default DrawerMenuGroup;
