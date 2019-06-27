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
      viewingItem: false,
    }
    this.goToBrowse = this.goToBrowse.bind(this);
    this.goToMyActivity = this.goToMyActivity.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
    this.toggleSellItem = this.toggleSellItem.bind(this);
    this.closeItemDescription = this.closeItemDescription.bind(this);
    this.closeAddItem = this.closeAddItem.bind(this);
    this.openItemDescription = this.openItemDescription.bind(this);
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
    let newData = this.state.items;
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

  closeAddItem(){
    this.setState({
      addingItem: false,
    })
  }
  
  openItemDescription() {
    this.setState({
      viewingItem: true,
    })
  }

  render() {
    return (
      <div className="App">
        <Header goToBrowse = {this.goToBrowse} goToMyActivity = {this.goToMyActivity} currentPage = {this.state.page}/>
        <button onClick = {this.toggleSellItem}>Sell Something</button>
        {this.state.addingItem ? <AddItem addNewItem = {this.addNewItem} closeAddItem = {this.closeAddItem}/> : null}
        {this.state.page === 'Browse' ? <Browse items = {this.state.items.filter(item => item.status === 'active')} openItemDescription = {this.openItemDescription} currentPage = {this.state.page}/> : null}
        {this.state.page === 'MyActivity' ? <MyActivity items = {this.state.items.filter(item => item.owner === this.state.user)} openItemDescription = {this.openItemDescription} currentPage = {this.state.page}/> : null}
        {this.state.viewingItem ? <ItemDescription item = {this.state.items[0]} closeItemDescription = {this.closeItemDescription}/> : null}
      </div>
    );
  }
}

export default App;
