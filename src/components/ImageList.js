import React, { Component } from 'react'
import ImageCard from './ImageCard'
import './ImageList.css'

export default class ImageList extends Component {

  //helper method
  getURLs = () => {
    return
  }

  render() {
    const imageurls = this.props.images.map(
      image => {
        return <ImageCard key={image.id} image={image} />
      }
    );
    return (
      <div className="image-list">

        {imageurls}
      </div>
    )
  }
}
