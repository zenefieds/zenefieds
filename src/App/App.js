import React, {Component} from 'react';
import Header from './Header/Header.js';
import Browse from './Browse/Browse.js';
import MyActivity from './My_Activity/MyActivity.js';
import AddItem from './Add_Item/AddItem.js';
import data from '../data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: 'Kevin',
      page: 'Browse',
      items: data,
      addingItem: false,
    }
    this.togglePages = this.togglePages.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
    this.toggleSellItem = this.toggleSellItem.bind(this);
  }
  togglePages() {
    if(this.state.page === 'Browse') {
      this.setState({
        page: 'MyActivity'
      })
    } else {
      this.setState({
        page: 'Browse'
      })
    }
  }

  addNewItem(item) {
    let newData = this.state.data;
    newData.push(item);
    this.setState({
      items: newData,
      addingItem: false,
    })
  }

  toggleSellItem() {
    this.setState({addingItem: true})
  }

  render() {
    return (
      <div className="App">
        <Header togglePages = {this.togglePages}/>
        <button onClick = {this.toggleSellItem}>Sell Something</button>
        {this.state.addingItem ? <AddItem addNewItem = {this.addNewItem}/> : null}
        {this.state.page === 'Browse' ? <Browse items = {this.state.items}/> : null}
        {this.state.page === 'MyActivity' ? <MyActivity items = {this.state.items.filter(item => item.owner === this.state.user)}/> : null}
      </div>
    );
  }
}

export default App;
