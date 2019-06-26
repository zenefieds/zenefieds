import React, {Component} from 'react';
import './NavBar.css';

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
      console.log('current page prop: ', this.props.currentPage);
        return (
          <div className='NavBar'>
            <div className='TopRow'>
              <div className = 'BrowseButton' onClick = {this.props.goToBrowse}>Browse</div>
              <div className = 'ActivityButton' onClick = {this.props.goToMyActivity}>Activity</div>
            </div>
            <div className='BottomRow'>
              { this.props.currentPage === 'Browse' ? <div className = 'BrowseButtonBlock'></div> : null }
              { this.props.currentPage === 'MyActivity' ? <div className = 'ActivityButtonBlock'></div> : null }
            </div>
          </div>
        );
    }

}

export default NavBar;