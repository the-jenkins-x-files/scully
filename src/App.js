import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    fetch('/api')
      .then(response => response.json())
      .then(({ server }) => this.setState({ server }))
      .catch(console.err);
  }

  state = {
    server: '',
    quote: ''
  }

  callAPI = () => {
    fetch(`${this.state.server}/quote/random`)
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
            You are connected to: { this.state.server }
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
