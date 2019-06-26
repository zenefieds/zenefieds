import React, {Component} from 'react';
import headerImage from './HeaderImage.png';
import ReturnNav from './NavBar/NavBar.js';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
          <div>
            <img className = 'HeaderImage' src = {headerImage}></img>
            <ReturnNav goToBrowse = {this.props.goToBrowse} goToMyActivity = {this.props.goToMyActivity} currentPage = {this.props.currentPage}/>
          </div>
        );
    }
}

export default Header;