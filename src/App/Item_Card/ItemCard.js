import React, {Component} from 'react';

const ItemCard = (props) => {
    console.log(props)
    return (
        <div>{props.item.title}</div>
    )
}

export default ItemCard;