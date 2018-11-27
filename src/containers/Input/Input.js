import React, { Component   } from 'react';
import './Input.css';

class Input extends Component {
    constructor(props){
        super(props);
        this.state={
            value:'',
            active:false
        }
        this.updateInputValue = this.updateInputValue.bind(this);
        this.activateField = this.activateField.bind(this);
        this.disableFocus = this.disableFocus.bind(this);
    }

    activateField(e) {
        e.target.placeholder="";
        this.setState({
            active: true
        });
    }
    disableFocus(e) {
        if (e.target.value === "") {
            e.target.placeholder=this.props.name;
            this.setState({
                active: false
            });
        }
    }
    updateInputValue(e) {
        this.setState({
            value: e.target.value,
        });
        this.activateField(e);
        e.preventDefault();
    }

    render() {
        return (
            <div className="input-wrapper">
                <label className={this.state.active? "input-label-active": "input-label"}>{this.props.name}</label>
                <input 
                    className="input"
                    value={this.state.value}
                    onFocus={this.activateField}
                    onBlur={this.disableFocus}
                    onChange={this.updateInputValue}
                    placeholder={this.props.name}
                />
            </div>
        );
    }
}

export default Input;
