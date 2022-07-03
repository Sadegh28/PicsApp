import React, { Component } from 'react'
import Unsplash from '../components/api/Unsplash'
import SearchBar from './SearchBar'
import Spiner from './Spiner';
import ImageList from './ImageList';


export default class App extends Component {
  state = { searching: false, images: [] };


  onSearchSubmit = async (term) => {

    this.setState({ searching: true });
    // the axios (AJAX) request goes here
    const response = await Unsplash.get('/search/photos', {
      params: { query: term }
    });
    this.setState({ searching: false, images: response.data.results });

  }

  render() {
    return (
      <div>
        <div className="container border mt-3">
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
        <div className="container mt-4">
          {this.state.searching ? <Spiner /> : <ImageList images={this.state.images} />}
        </div>



      </div>
    );
  }




}
