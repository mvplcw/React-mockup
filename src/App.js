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
        <div class="container-lg ">
          <div class="row">
            <Sidenav/>
            <MainContent/>
          </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
      </div>
    )
  }
}

export default App;