import React, { Component, Fragment } from 'react';
import './DrawerMenu.css';
import DrawerMenuGroup from '../DrawerMenuGroup/DrawerMenuGroup';


const menuGroups = [
    {
        title: 'account',
        items: [
            {name:'Career', route:'/Career'},
            {name:'Personal', route:'/Personal'}
        ]
    },
    {
        title: 'manage',
        items: [
            {name:'Password', route:'/Password'},
            {name:'Email', route:'/Email'}
        ]
    },
];

class DrawerMenu extends Component {
  render() {
    return (
        <Fragment>
            {menuGroups.map((item,index) => 
                <DrawerMenuGroup key={index} title={item.title} list={item.items} handleClose={this.props.handleClose}/>
            )}
        </Fragment>
    );
  }
}

export default DrawerMenu;
