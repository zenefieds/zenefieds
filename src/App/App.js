import React, {Component} from 'react';
import Header from './Header/Header.js';
import Browse from './Browse/Browse.js';
import MyActivity from './My_Activity/MyActivity.js';
import data from '../data.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: 'Kevin',
      page: 'Browse',
      items: data
    }
  }
  render() {
    return (
      <div className="App">
        <Header/>
        {this.state.page === 'Browse' ? <Browse items = {this.state.items}/> : null}
        {this.state.page === 'MyActivity' ? <MyActivity items = {this.state.items.filter(item => item.owner === this.state.user)}/> : null}
      </div>
    );
  }
}

export default App;
