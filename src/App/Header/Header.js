import React, {Component} from 'react';
import headerImage from './HeaderImage.png';
import NavBar from './NavBar/NavBar.js';
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
            <NavBar togglePages = {this.props.togglePages}/>
          </div>
        );
    }
}

export default Header;