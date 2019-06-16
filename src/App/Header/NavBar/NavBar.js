import React, {Component} from 'react';
import './NavBar.css';

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
          <div className='NavBar'>
            <div className = 'ButtonText' onClick = {this.props.togglePages}>Browse</div>
            <div className = 'ButtonText' onClick = {this.props.togglePages}>Activity</div>
          </div>
        );
    }

}

export default NavBar;