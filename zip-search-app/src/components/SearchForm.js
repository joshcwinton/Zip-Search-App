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
      zipCode: this.props.zipCode,
      city: this.props.city,
      state: this.props.state,
      lat: this.props.lat,
      lon: this.props.lon,
      population: this.props.population,
      wages: this.props.wages
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.zipSearch = this.zipSearch.bind(this);
  }

  handleSubmit = (event) => {
    console.log("original value", this.state.zipCode)
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
      console.log(response)
      if (response.data[0].City) {
        console.log(response.data[0].City);
        this.setState({
          city: response.data[0].City,
          state: response.data[0].State,
          lat: response.data[0].Lat,
          lon: response.data[0].Long,
          population: response.data[0].EstimatedPopulation,
          wages: response.data[0].TotalWages
        })
      }
    })
  }


  render() {
    return (
      <div id="main">
        <div id='search-form' >
          <label>
            Zip Code:
            <input type="text" ref="zip" placeholder="Try 10016" />
          </label>
          <button onClick={this.handleSubmit} value="Submit">Submit</button>
          <h1>{this.state.zipCode}</h1>
        </div>
        <div className="ResultsCard">
          <h1> {this.state.city}, {this.state.state} </h1>
          <h2> State: {this.state.state} </h2>
          <h2> Location: {this.state.lat}, {this.state.lon} </h2>
          <h2> Population (estimated): {this.state.population} </h2>
          <h2> Total Wages: {this.state.wages}</h2>
        </div>
      </div>
    );
  }
}

export default SearchForm;
