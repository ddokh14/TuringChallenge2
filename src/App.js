import React, { Component, Fragment } from 'react';
import TopBar from './components/TopBar/TopBar'
import Drawer from './components/Drawer/Drawer'
import Personal from './components/Personal/Personal'
import Email from './components/Email/Email'
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
        open: false,
    }
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleClose(){
    this.setState({
      open: false,
    });
  }

  handleOpen(){
    this.setState({
      open: true,
    });
  }

  render() {
    return (
      <Fragment>
        <TopBar
          handleOpen={this.handleOpen}
        />
        <Router>
          <Fragment>
            <Drawer 
              open={this.state.open} 
              handleClose={this.handleClose}
            />
            <Route path="/Personal" component={Personal}/>
            <Route path="/Email" component={Email}/>
          </Fragment>
        </Router>
      </Fragment>
    );
  }
}

export default App;
