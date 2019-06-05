import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './ResultsCard.css'

class ResultsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: this.props.city,
      state: this.props.state,
      location: this.props.location,
      population: this.props.population,
      wages: this.props.wages
    }
  }

  render() {
    return (
      <div className = "ResultsCard">
        <h1> {this.state.city}, {this.state.state} </h1>
        <h2> State: {this.state.state} </h2>
        <h2> Location: {this.state.location} </h2>
        <h2> Population (estimated): {this.state.population} </h2>
        <h2> Total Wages: {this.state.wages}</h2>
      </div>
    );
  }
}

ResultsCard.propTypes = {
  city: PropTypes.string,
  state: PropTypes.string,
  location: PropTypes.string,
  population: PropTypes.number,
  wages: PropTypes.number
}

export default ResultsCard;
