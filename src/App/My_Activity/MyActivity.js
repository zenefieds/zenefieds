import React, {Component} from 'react';
import ItemCard from '../Item_Card/ItemCard.js';
import Browse from '../Browse/Browse.js';
import './MyActivity.css';

class MyActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className="MyActivity">
        <h1>Draft Listings</h1>
        <Browse items = {this.props.items.filter(item => item.status === 'draft')} />
        <hr className = 'Horizontal-Line'/>
        <h1>Active Listings</h1>
        <Browse items = {this.props.items.filter(item => item.status === 'active')} />
        <hr className = 'Horizontal-Line'/>
        <h1>Inactive Listings</h1>
        <Browse items = {this.props.items.filter(item => item.status === 'inactive')} />
      </div>
    );
  }
}

export default MyActivity;