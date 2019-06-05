import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import SearchForm from './components/SearchForm.js';
import Results from './components/Results.js'




function App() {
  return (
    <div className="App">
      <header className="App-header">
        Zip Code Search
      </header>
      <SearchForm />
      <Results />
    </div>
  );
}

export default App;
