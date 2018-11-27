import React, { Component, Fragment } from 'react';
import Content from '../Content/Content'
import PersonalFrom from './PersonalForm'

class Personal extends Component {
  render() {
    return (
      <Fragment>
        <Content 
         title="Your Account" 
         lowerTitle="Tell us a little more about yourself" 
         bodyTitle="Personal Information"
        >
            <PersonalFrom/>
        </Content>
      </Fragment>
    );
  }
}

export default Personal;
