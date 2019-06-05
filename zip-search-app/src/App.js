import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/SearchForm.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Zip Code Search
      </header>
      <SearchForm />
    </div>
  );
}

export default App;
