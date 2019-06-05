import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ResultsCard from './ResultsCard.js'
import './SearchForm.js'
import SearchForm from './Results.css';

class Results extends Component {
  constructor(props){
    super(props);
    this.state = {
      arrayOfResults: this.props.arrayOfResults,
    }
  }

  render(){
    return (
      <div className="results-container">
        <ResultsCard city={this.props.city} state="New York" location="My Location" population={10} wages={10000}/>
      </div>
    )
  }
}

Results.propTypes = {
  arrayOfResults: PropTypes.arrayOf(PropTypes.number)
}

export default Results;
