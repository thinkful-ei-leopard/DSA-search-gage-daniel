import React from 'react';
import './App.css';
import Results from './Results';
import calculateResults from './functions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Linear vs Binary Search Performance</h1>
      </header>
      <form onSubmit= {(e) => {
        e.preventDefault()
        console.log(calculateResults(e.target.input.value))
        }}>
        <label htmlFor='input'>Input a Number between 0 and 100</label>
        <input type='number' id='input' min='0' max='100'/>
        <button type='submit'>Submit</button>
      </form>
      <Results />
    </div>
  );
}

export default App;
