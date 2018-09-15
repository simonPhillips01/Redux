import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyDLWVakQ7DHwfrRZNZR9eeWC7QCmRSeqbE';

//Create a new component. This component should produce some HTML
const App = function() {
  return <div>Hi!</div>
}

//Take this components generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
