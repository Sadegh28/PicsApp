import React, { Component } from 'react'

export default class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpan);
  }

  setSpan = () => {
    const imageHeight = this.imageRef.current.clientHeight;
    const spans = Math.ceil(imageHeight / 10);
    this.setState({ spans: spans })
  }

  render() {
    return (
      <div style={{
        gridRowEnd: `span ${this.state.spans}`
      }}>
        <img
          ref={this.imageRef}
          alt=''
          src={this.props.image.urls.regular}
        />
      </div >
    )
  }
}
