import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    server: '',
    quote: ''
  }

  callAPI = () => {
    fetch(`api/quote/random`)
      .then(response => response.json())
      .then(({ quote }) => this.setState({ quote }))
      .catch(() => {
        this.setState({
          quote: '(╯°□°）╯︵ ┻━┻ Something go wrong ... sorry'
        });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to the CI/CD training
          </p>
          <p>
            { this.state.quote }
          </p>
          <button className="App-api-button" onClick={this.callAPI}>Say me something</button>
        </header>
      </div>
    );
  }
}

export default App;
