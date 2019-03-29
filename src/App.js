import React, { Component } from 'react';
import bulle from './bulle.png';
import dana from './dana.png';
import './App.css';

class App extends Component {
  state = {
    quote: '...'
  }

  callAPI = () => {
    fetch(`api/quote/random`)
      .then(response => response.json())
      .then(({ quote }) => this.setState({ quote: `Mulder says: ${quote}` }))
      .catch(() => {
        this.setState({
          quote: '(╯°□°）╯︵ ┻━┻ Something went wrong while contacting Mulder...'
        });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>
          The Jenkins X Files version 1.1
        </h1>
        <header className="App-header">
          <div className="dana-say">
            <img src={bulle} onClick={this.callAPI} className="App-bulle" alt="logo" />
            <img src={dana} className="App-logo" alt="logo" />
          </div>
          <p className="App-quote">
            { this.state.quote }
          </p>
        </header>
      </div>
    );
  }
}

export default App;
