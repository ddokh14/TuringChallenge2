import React, { Component, Fragment } from 'react';
import Content from '../Content/Content'
import EmailFrom from './EmailFrom'

class Email extends Component {
  render() {
    return (
      <Fragment>
        <Content 
         title="Your Account" 
         lowerTitle="Tell us a little more about yourself" 
         bodyTitle="Change email address"
        >
            <EmailFrom/>
        </Content>
      </Fragment>
    );
  }
}

export default Email;
