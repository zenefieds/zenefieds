import React, {Component} from 'react';
import Header from './Header/Header.js';
import Browse from './Browse/Browse.js';
import MyActivity from './My_Activity/MyActivity.js';
import AddItem from './Add_Item/AddItem.js';
import data from '../data.js';
import ItemDescription from './Item_Description/ItemDescription.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: 'Kevin',
      page: 'Browse',
      items: data,
      addingItem: false,
      viewingItem: true,
    }
    this.goToBrowse = this.goToBrowse.bind(this);
    this.goToMyActivity = this.goToMyActivity.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
    this.toggleSellItem = this.toggleSellItem.bind(this);
    this.closeItemDescription = this.closeItemDescription.bind(this);
  }
  goToBrowse() {
    this.setState({
      page: 'Browse'
    })
  }

  goToMyActivity() {
    this.setState({
      page: 'MyActivity'
    })
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

  closeItemDescription(){
    this.setState({
      viewingItem: false,
    })
  }

  render() {
    return (
      <div className="App">
        <Header goToBrowse = {this.goToBrowse} goToMyActivity = {this.goToMyActivity} currentPage = {this.state.page}/>
        <button onClick = {this.toggleSellItem}>Sell Something</button>
        {this.state.addingItem ? <AddItem addNewItem = {this.addNewItem}/> : null}
        {this.state.page === 'Browse' ? <Browse items = {this.state.items}/> : null}
        {this.state.page === 'MyActivity' ? <MyActivity items = {this.state.items.filter(item => item.owner === this.state.user)}/> : null}
        {this.state.viewingItem ? <ItemDescription item = {this.state.items[0]} closeItemDescription = {this.closeItemDescription}/> : null}
      </div>
    );
  }
}

export default App;
