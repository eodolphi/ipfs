import React, { Component } from 'react';
import Task from './components/task';

export default class App extends Component {
  render() {
    return (
      <div>
          <h1>IPFS Test App</h1>
          <Task/>
      </div>
    );
  }
}
