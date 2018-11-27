import React, { Component, Fragment   } from 'react';
import Input from '../../containers/Input/Input'
import InputSelect from '../InputSelect/InputSelect'

class PersonalFrom extends Component {
  render() {
    return (   
        <Fragment>     
            <Input name="First name"/>
            <Input name="Last name"/>
            <Input name="Phone"/>
            <InputSelect name="Country"/>
        </Fragment>  
    );
  }
}

export default PersonalFrom;
