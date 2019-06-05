import React, { Component } from 'react';
import './SearchForm.css';
import axios from 'axios';

class SearchForm extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <div id='search-form'>
        <form>
          Zip Code:
          <input type="text" name="zip" value={this.state.zipCode}/>
        </form>
      </div>
    );
  }
}

export default SearchForm;
