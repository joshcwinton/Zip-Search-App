import React, { Component } from 'react';
import './SearchForm.css';
import axios from 'axios';


class SearchForm extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleSubmit = async(event) =>
  {
     if (event.key === 'Enter')
     {
        let zipURI = 'http://ctp-zip-api.herokuapp.com/zip/';
        let zip = event.target.value;
        zipURI = zipURI + zip;

        await axios.get(zipURI)
        .then(response =>
          {
             console.log(response);
          });
      }
  }

  render(){
    return (
      <div id='search-form'>
        <form>
          Zip Code:  <input type="text" name="zip" placeholder="Try 10016" value={this.state.zipCode} onKeyDown= {this.handleSubmit}/>
        </form>
      </div>
    );
    }

}

export default SearchForm;
