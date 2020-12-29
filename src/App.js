import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css'

import './App.css';

import Topmenu from './components/Topmenu'
import Sidenav from './components/Sidenav'
import MainContent from './components/MainContent'


class App extends Component {
  state = {
    count: 0
  }

  componentWillMount = () => {
    // let test = this.state.count + 1
    // this.state.count = test
    this.setState({ count: this.state.count + 1 })
  }

  componentDidMount = () => {
    this.setState({ count: this.state.count + 1 }, () => {
      // callback / Promises / Async Await
      // alert( 'count is updated successfully.' )
    })
  }

  componentDidUpdate = ( prevProps, prevState ) => {
    console.log( prevState )
  }

  componentDidCatch = () => {

  }

  render = () => {
    return (
      <div className="App">
        <Topmenu/>
        <div className="container-lg ">
          <div className="row">
            <Sidenav/>
            <MainContent/>
          </div>
        </div>
      </div>
      
    )
  }
}

export default App;