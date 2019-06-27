import React, {Component} from 'react';
import ItemImage from '../Product main image.png';
import './ItemCard.css'

class ItemCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLiked: true,
        }
        this.toggleLiked = this.toggleLiked.bind(this);
    }

    toggleLiked(event) {
        event.preventDefault();
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    render() {
        return (
            <div className='itemCardComponent'>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"></link>
                <div className='picutreWithPriceAndHeart'>
                    <img src={ItemImage}/>
                    <div className='priceChip'>
                        ${this.props.item.price}
                    </div>
                    <span className="heart-icon" onClick={this.toggleLiked}>
                        { this.state.isLiked ? <i class="material-icons">favorite</i> : <j class="material-icons">favorite</j>}
                    </span>
                </div>
                <div className='categoryText'>{this.props.item.category}</div>
                <div className='titleText'>{this.props.item.title}</div>
                <div className='ownerDateText'>{this.props.item.owner}&nbsp;&nbsp;&#8226;&nbsp;&nbsp;{this.props.item.date}</div>
            </div>
        )
    }
}

export default ItemCard;