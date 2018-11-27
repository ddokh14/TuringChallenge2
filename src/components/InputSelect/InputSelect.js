import React, { Component   } from 'react';
import './InputSelect.css';
import Down from './Down.svg'

class InputSelect extends Component {
  render() {
    return (
        <div className="input-wrapper">
            <label className="input-label-active">{this.props.name}</label>
            <select className="input-select" style={{
                background: "transparent url("+ Down +") no-repeat 100% center"
            }}>
                <option value="usa">United States</option>
                <option value="geo">Georgia</option>
            </select>
        </div>
    );
  }
}

export default InputSelect;
