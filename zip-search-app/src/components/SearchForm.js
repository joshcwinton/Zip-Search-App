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
    console.log("error here")
  }
}

class SearchForm extends Component {
  constructor(props) {
    super(props);
    //const cityList = [];
    this.state = {
      cityList: [],
      zipCode: this.props.zipCode,
      city: this.props.city,
      state: this.props.state,
      lat: this.props.lat,
      lon: this.props.lon,
      population: this.props.population,
      wages: this.props.wages,
      visible: false
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.zipSearch = this.zipSearch.bind(this);
  }

  handleSubmit = async (event) => {
    console.log("original value", this.state.zipCode)
    console.log(event.target)
    await this.setState(prevState => { return { zipCode: this.refs.zip.value } });
    console.log("passing in", this.state.zipCode)

    await this.zipSearch(this.state.zipCode);
  }

  zipSearch = async (zipCode) => {
    console.log("zip", zipCode)
    let response = await getCity(zipCode)
    if (!(response === undefined)) {
      let curr = this.state.cityList;
      for (let i = 0; i < response.data.length; i++) {
        console.log("for loop")
        console.log(response.data[i].City)
        let temp = {
          city: response.data[i].City,
          state: response.data[i].State,
          lat: response.data[i].Lat,
          lon: response.data[i].Long,
          population: response.data[i].EstimatedPopulation,
          wages: response.data[i].TotalWages
        }
        console.log(temp.city)
        curr = curr.concat(temp);
        //console.log(this.cityList[i].state)
      }
      this.setState({
        cityList: curr,
        visible: true
      });
      console.log("length of cityList", this.state.cityList.length)
      console.log("city info", this.state.cityList[2].state)
    }
    else {
      this.setState({
        visible: false
      })
    }
  }



  render() {
    if (this.state.visible) {
      return (
        <div id="main">
          <form id='search-form' onSubmit={this.handleSubmit} >
            <label>
              Zip Code:
            <input type="text" ref="zip" placeholder="Try 10016" />
            </label>
            <input type="button" onClick={this.handleSubmit} value="Submit" />
            <h1>{this.state.zipCode}</h1>
          </form>
          <div className="ResultsCard">
            {this.state.cityList.map(item => (
              <React.Fragment key={item.id}>
                <h2>City: {item.city}</h2>
                <h3>State: {item.state}</h3>
                <h3>Location: {item.lat}, {item.lon}</h3>
                <h3>Wages: {item.wages}</h3>
              </React.Fragment>
            ))}
          </div>
        </div>
      );
    }
    else {
      return (
        <div id="main">
          <form id='search-form' onSubmit={this.handleSubmit} >
            <label>
              Zip Code:
            <input type="text" ref="zip" placeholder="Try 10016" />
            </label>
            <input type="button" onClick={this.handleSubmit} value="Submit" />
            <h1>{this.state.zipCode}</h1>
          </form>
        </div>
      );
    }
  }
}

export default SearchForm;
