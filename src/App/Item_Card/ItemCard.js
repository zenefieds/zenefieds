import React, {Component} from 'react';
import './ItemCard.css'

const ItemCard = (props) => {
    console.log(props)
    return (
        <div>{props.item.title}</div>
    )
}

export default ItemCard;