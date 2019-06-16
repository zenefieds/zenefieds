import React, {Component} from 'react';
import ItemCard from '../Item_Card/ItemCard.js';

class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className="Browse">
        {this.props.items.map((item) => {
            return <ItemCard item = {item} />
        })}
      </div>
    );
  }
}

export default Browse; 