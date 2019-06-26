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
      <div className='Add-Item'>
        <div className='Add-Item-Container'>
          <div className = 'Item-Description-Close-Button' onClick = {this.props.closeAddItem}>
              <img className = 'Item-Description-Close-Button-Image' src = {closeButtonImage} />
          </div>
          <form onSubmit ={e => this.submitNewItem(e)}>
            <div><p>title: </p><input type='text' value = {this.state.title} onChange = {this.titleChange}></input></div>
            <div><p>description: </p><input type='text' value = {this.state.description} onChange = {this.descriptionChange}></input></div>
            <div><p>photos: </p><input type='text' value = {this.state.photoURL} onChange = {this.photosChange}></input><button onClick = {this.addPhoto}>Add Another Photo</button></div>
            <div><p>price: </p><input type='number' value = {this.state.price} onChange = {this.priceChange}></input></div>
            <div><p>area: </p><input type='text' value = {this.state.area} onChange = {this.areaChange}></input></div>
            <div><p>category: </p><input type='text' value = {this.state.category} onChange = {this.categoryChange}></input></div>
            <div><input type = 'submit' value = 'Submit'/></div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddItem;