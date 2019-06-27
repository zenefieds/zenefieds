import React, {Component} from 'react';
import ItemImage from '../Product main image.png';
import './ItemCard.css'

const ItemCard = (props) => {
    console.log(props)
    return (
        <div className='itemCardComponent' onClick = {props.openItemDescription}>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"></link>
            <div className='picutreWithPriceAndHeart'>
                <img className = 'Item-Card-Image' src={props.item.photo || ItemImage}/>
                <div className='priceChip'>
                    ${props.item.price}
                </div>
                <span className="heart-icon">
                    <i class="material-icons">favorite</i>
                </span>
            </div>
            <div className='categoryText'>{props.item.category}</div>
            <div className='titleText'>{props.item.title}</div>
            <div className='ownerDateText'>{props.item.owner}&nbsp;&nbsp;&#8226;&nbsp;&nbsp;{props.item.date}</div>
        </div>
    )
}

export default ItemCard;