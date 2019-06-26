import React, {Component} from 'react';
import ItemCard from '../Item_Card/ItemCard.js';
import './Browse.css'

class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className="Browse cardContainer">
        {this.props.items.map((item, i) => {
            return <ItemCard key = {i} item = {item} openItemDescription = {this.props.openItemDescription}/>
        })}
      </div>
    );
  }
}

export default Browse; 