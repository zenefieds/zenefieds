import React, {Component} from 'react';
import ItemCard from '../Item_Card/ItemCard.js';
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
        {this.props.items.map((item, i) => {
            return <ItemCard key = {i} item = {item}/>
        })}
      </div>
    );
  }
}

export default MyActivity;