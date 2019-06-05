import React, { Component } from 'react';
import './SearchForm.css';


const axios = require('axios')


const getCity = async (zipCode) => {
  try {
    let url = 'http://ctp-zip-api.herokuapp.com/zip/' + zipCode
    console.log(url)
    return await axios.get(url)
  } catch (error) {
    console.error(error)
  }
}

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: "00000",
      cityName: "Test"
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.zipSearch = this.zipSearch.bind(this);
  }

  handleSubmit = (event) => {
    this.setState({
      zipCode: this.refs.zip.value
    });
    console.log("passing in", this.state.zipCode)
    this.zipSearch(this.state.zipCode);
  }

  zipSearch = async (zipCode) => {
    console.log("zip", zipCode)
    let temp = zipCode
    getCity(temp).then(response => {
         if(response.data[0].City){
           console.log(response.data[0].City);
             this.setState({
               cityName: response.data[0].City
             })
           }
      })
    }


  render() {
        return(
      <div id = 'search-form' >
            <label>
              Zip Code:
            <input type="text" ref="zip" placeholder="Try 10016" />
            </label>
            <button onClick={this.handleSubmit} value="Submit">Submit</button>
            <h1>{this.state.zipCode}</h1>
      </div>
    );
  }
}

export default SearchForm;
