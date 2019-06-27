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
        area: '',
        category: '',
        owner: 'Kevin',
    }
    this.titleChange = this.titleChange.bind(this);
    this.descriptionChange = this.descriptionChange.bind(this);
    this.photosChange = this.photosChange.bind(this);
    this.addPhoto = this.addPhoto.bind(this);
    this.priceChange = this.priceChange.bind(this);
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
          <div className = 'Add-Item-Close-Button' onClick = {this.props.closeAddItem}>
              <img className = 'Add-Item-Close-Button-Image' src = {closeButtonImage} />
          </div>
          <form onSubmit ={e => this.submitNewItem(e)}>
            <div className="row"><div className="col-25"><label>title: </label></div><div className="col-75"><input type='text' value = {this.state.title} onChange = {this.titleChange}></input></div></div>
            <div className="row"><div className="col-25"><label>description: </label></div><div className="col-75"><input type='textarea' value = {this.state.description} onChange = {this.descriptionChange}></input></div></div>
            <div className="row"><div className="col-25"><label>photos: </label></div><div className="col-75"><input type='upload' value = {this.state.photoURL} onChange = {this.photosChange}></input><button onClick = {this.addPhoto}>Add Another Photo</button></div></div>
            <div className="row"><div className="col-25"><label>price: </label></div><div className="col-75"><input type='text' value = {this.state.price} onChange = {this.priceChange}></input></div></div>
            <div className="row"><div className="col-25"><label>area: </label></div><div className="col-75"><input type='text' value = {this.state.area} onChange = {this.areaChange}></input></div></div>
            <div className="row"><div className="col-25"><label>category: </label></div><div className="col-75"><input type='text' value = {this.state.category} onClick = {this.categoryChange}></input></div></div>
            <div className="row"><div className="col-25"><p className="link">save for later </p></div><div className="col-75"><input type = 'submit' value = 'Post'/></div></div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddItem;