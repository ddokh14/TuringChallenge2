import React, { Component, Fragment   } from 'react';
import Input from '../../containers/Input/Input';

class EmailFrom extends Component {
  render() {
    return (   
        <Fragment>     
            <Input name="New email"/>
            <Input name="Confirm new email"/>
        </Fragment>  
    );
  }
}

export default EmailFrom;
