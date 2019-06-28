import React, {Component} from 'react';
import './AddItem.css';
import closeButtonImage from './close-button.png';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: '',
        description: '',
        photoURL: '',
        photos: [],
        price: 0,
        condition: '',
        area: '',
        category: '',
        owner: 'Kevin',
    }
    this.titleChange = this.titleChange.bind(this);
    this.descriptionChange = this.descriptionChange.bind(this);
    this.photosChange = this.photosChange.bind(this);
    this.addPhoto = this.addPhoto.bind(this);
    this.priceChange = this.priceChange.bind(this);
    this.conditionChange = this.conditionChange.bind(this);
    this.areaChange = this.areaChange.bind(this);
    this.categoryChange = this.categoryChange.bind(this);
    this.submitNewItem = this.submitNewItem.bind(this);
  }

  titleChange(e) {
    this.setState({title: e.target.value})
  }
  descriptionChange(e) {
    this.setState({description: e.target.value})
  }
  photosChange(e) {
    this.setState({photoURL: e.target.value})
  }
  addPhoto(e) {
    let photos = this.state.photos;
    photos.push(this.state.photoURL);
    this.setState({
      photos: photos,
      photoURL: '',
    })
    e.preventDefault();
  }
  priceChange(e) {
    this.setState({price: e.target.value})
  }
  conditionChange(e) {
    this.setState({condition: e.target.value})
  }
  areaChange(e) {
    this.setState({area: e.target.value})
  }
  categoryChange(e) {
    this.setState({category: e.target.value})
  }

  submitNewItem = (e) => {
    if (this.state.photoURL !== '') {
      this.addPhoto(e)
    }
    const item = {
      title: this.state.title,
      description: this.state.description,
      photos: this.state.photos,
      price: this.state.price,
      area: this.state.area,
      category: this.state.category,
      status: 'active',
      owner: this.state.owner,
    }
    this.props.addNewItem(item);
    this.setState({
      title: '',
      description: '',
      photos: [],
      price: null,
      area: '',
      category: '',
      owner: 'Kevin',
    })
    e.preventDefault();
  }


  render() {
    return (
      <div className='Add-Item-Background'>
        <div className='Add-Item-Container'>
          <div className='addItemHeader'>
            <div>Creat a new listing</div>
            <div className = 'Add-Item-Close-Button' onClick = {this.props.closeAddItem}>
                <img className = 'Add-Item-Close-Button-Image' src = {closeButtonImage} />
            </div>
          </div>
          <div className='border'></div>
          <form onSubmit ={e => this.submitNewItem(e)}>
            <div className="row"><div className="col-25"><label>Title: </label></div><div className="col-75"><input type='text' placeholder= 'Use words people would search for when looking for your item' value = {this.state.title} onChange = {this.titleChange}></input></div></div>
            <div className="row"><div className="col-25"><label>Description: </label></div><div className="col-75"><input type='textarea' value = {this.state.description} onChange = {this.descriptionChange}></input></div></div>
            <div className="row"><div className="col-25"><label>Photos: </label></div><div className="Photo-Box-Div"><i class="zmdi zmdi-cloud-upload"></i></div></div>
            <div className="row"><div className="col-25"><label>Condition: </label></div><div className="col-75"><input type='text' value = {this.state.condition} onChange = {this.conditionChange}></input></div></div>
            <div className="row"><div className="col-25"><label>Price: </label></div><div className="col-75"><input type='text' value = {this.state.price} onChange = {this.priceChange}></input></div></div>
            <div className="row"><div className="col-25"><label>Area: </label></div><div className="col-75"><input type='text' value = {this.state.area} onChange = {this.areaChange}></input></div></div>
            <div className="row"><div className="col-25"><label>Category: </label></div><div className="col-75"><input type='text' value = {this.state.category} onChange = {this.categoryChange}/></div></div>
            <div className = 'row'>
              <p className = 'disclaimer-text'>By posting, you confirm that this listing complies with your company's policies and all appplicable laws.</p>
              <p className = 'disclaimer-text-link'>Learn more</p>
            </div>
            <div className="row"><input type = 'submit' value = 'Post'/></div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddItem;