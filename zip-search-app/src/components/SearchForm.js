import React, { Component } from 'react';
import './SearchForm.css';
import axios from 'axios';

class SearchForm extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  handleSubmit = (event) => {
    if (event.key == 'Enter'){
       this.zipSearch(event.target.value);
    }
  }
  
  render(){
    return (
      <div id='search-form'>
        <form>
          Zip Code:  <input type="text" name="zip" placeholder="Try 10016"  onKeyDown= {this.handleSubmit} value={this.state.zipCode}/>
        </form>
      </div>
    );
  }
}

export default SearchForm;
