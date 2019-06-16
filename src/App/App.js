import React, {Component} from 'react';
import Header from './Header/Header.js';
import Browse from './Browse/Browse.js';
import MyActivity from './My_Activity/MyActivity.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 'Browse',
    }
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Browse/>
        <MyActivity/>
      </div>
    );
  }
}

export default App;
