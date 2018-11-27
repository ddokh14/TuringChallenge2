import React, { Component   } from 'react';
import './Content.css';

class Content extends Component {
  render() {
    return (
        <div className="content">
            <div className="content-title">
                <h1>{this.props.title}</h1>
                <p>{this.props.lowerTitle}</p>
            </div>
            <div className="content-body">
                <div className="content-body-title">
                    <p>{this.props.bodyTitle}</p>
                </div>           
                {this.props.children}
            </div>
        </div>
    );
  }
}

export default Content;
