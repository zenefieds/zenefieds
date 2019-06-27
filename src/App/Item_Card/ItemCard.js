import React, {Component} from 'react';
import ItemImage from '../Product main image.png';
import './ItemCard.css'

class ItemCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLiked: false,
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
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                <div className='picutreWithPriceAndHeart'>
                    <img className = 'Item-Card-Image' src={this.props.item.photo || ItemImage}/>
                    <div className='priceChip'>
                        ${this.props.item.price}
                    </div>
                    { this.props.currentPage !== 'MyActivity' ? 
                    <span className="heart-icon" onClick={this.toggleLiked}>
                        { this.state.isLiked ? <i class="material-icons">favorite</i> : <j class="material-icons">favorite</j>}
                    </span>
                    : <div></div> }
                </div>
                <div className='categoryText'>{this.props.item.category}</div>
                <div className='titleText'>{this.props.item.title}</div>
                <div className='textAndEdit'>
                    <div className='ownerDateText'>
                    {this.props.item.owner}&nbsp;&nbsp;&#8226;&nbsp;&nbsp;{this.props.item.date}
                    </div>
                    {this.props.currentPage === 'MyActivity' ? <div className='pencilEdit'>
                        <i class="material-icons">border_color</i>
                    </div> : <div></div>}
                </div>
            </div>
        )
    }
}

export default ItemCard;