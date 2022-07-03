import React, { Component } from 'react'

export default class SearchBar extends Component {
  state = { term: '' };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  }



  render() {
    return (
      <div className='pt-3 pb-3'>
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <label className='h5'>Image Search</label>
            <input type="text" className="form-control mt-1" id="picName" value={this.state.term} onChange={this.onInputChange} />
          </div>


        </form>
      </div>
    );
  }
}
