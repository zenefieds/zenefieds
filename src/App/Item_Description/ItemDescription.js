import React from 'react';
import image from '../image.png';
import './ItemDescription.css';
import emailImage from './email.png';
import payPalImage from './PayPal.png';
import slackImage from './slack.png';
import venmoImage from './Venmo.png'

const ItemDescription = (props) => {
    console.log(props.item);
    return (
        <div className = 'Item-Description-Background'>
            <div className = 'Item-Description-Container'>
                <div className = 'Item-Description-Left-Container'>
                    <div className = 'Item-Description-Image'><img src = {image}/></div>
                    <p>Have a question about the product?</p>
                    <div className = 'Item-Description-Question-Input'>
                        <div className = 'Item-Description-Ask-Seller'>Ask the Seller</div>
                    </div>
                    <div className = 'Item-Description-Q-And-A'>
                        <div className = 'Item-Description-Q-A-Text-Container'>
                            <h1>Questions and answers</h1>
                            <div className = 'Item-Description-Q-and-A-Single-Question'>
                                <div className = 'Item-Description-Q-and-A-Spacer'>
                                    <p>Question:</p>
                                </div>
                                <p>Do the hands glow in the dark?</p>
                            </div>
                            <div className = 'Item-Description-Q-and-A-Single-Question'>
                            <div className = 'Item-Description-Q-and-A-Spacer'>
                                    <p>Answer:</p>
                                </div>
                                <p>No</p>
                            </div>
                            <div className = 'Item-Description-Q-and-A-Single-Question'>
                            <div className = 'Item-Description-Q-and-A-Spacer'>
                                    <p>Question:</p>
                                </div>
                                <p>What is the size of the watch face?</p>
                            </div>
                            <div className = 'Item-Description-Q-and-A-Single-Question'>
                            <div className = 'Item-Description-Q-and-A-Spacer'>
                                    <p>Answer:</p>
                                </div>
                                <p>The dial diameter of the watch is 41mm</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className = 'Item-Description-Close-Window-Container'>
                        <p className = 'Item-Description-Small-Text'>{props.item.category}</p>
                        <button className = 'Item-Description-Close-Button' onClick = {props.closeItemDescription}>close</button>
                    </div>
                    <p className = 'Item-Description-Item-Title'>{props.item.title}</p>
                    <div className = 'Item-Description-Seller-Info'>
                        <p className = 'Item-Description-Small-Text'>{props.item.owner}</p>
                        <p className = 'Item-Description-Seller-Info-Separator'>-</p>
                        <p className = 'Item-Description-Small-Text'>{props.item.city}</p>
                        <p className = 'Item-Description-Seller-Info-Separator'>-</p>
                        <p className = 'Item-Description-Small-Text'>{props.item.date}</p>
                    </div>
                    <div className = 'Item-Description-Price'>${props.item.price}</div>
                    <div className = 'Item-Description-Header'>Description</div>
                    <p className = 'Item-Description-Description'>{props.item.description}</p>
                    <div className = 'Item-Description-Header'>Payment methods</div>
                    <div className = 'Item-Description-Images-Container'>
                        <div className = 'Item-Description-Left-Image'>
                            <img src = {venmoImage}/>
                        </div>
                        <img src = {payPalImage}/>
                    </div>
                    <div className = 'Item-Description-Header'>Contact the seller</div>
                    <div className = 'Item-Description-Images-Container'>
                        <div className = 'Item-Description-Left-Image'>
                            <img src = {slackImage}/>
                        </div>
                        <img src = {emailImage}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDescription;