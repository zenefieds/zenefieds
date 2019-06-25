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
            <div className='TopRow'>
              <div className = 'BrowseButton' onClick = {this.props.togglePages}>Browse</div>
              <div className = 'ActivityButton' onClick = {this.props.togglePages}>Activity</div>
            </div>
            <div className='BottomRow'>
              <div className = 'BrowseButtonBlock'></div>
              <div className = 'ActivityButtonBlock'></div>
            </div>
          </div>
        );
    }

}

export default NavBar;