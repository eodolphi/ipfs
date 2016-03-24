import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import {loadTask} from '../actions/tasks';
import DevTools from './DevTools' 
import Task from '../components/task';

const HASH = 'QmWXZLoAmaiG6NzX5SSr6SetF9o2azsSnXYrY96G5Hpz6d';

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
          <div>
              <h1>IPFS Test App</h1>
              <Task {...this.props[HASH]}/>
              <DevTools store={this.props.store}/>
          </div>
      </Provider>
    );
  }

  componentWillMount () {
      this.props.loadTask(HASH);
  }
}

export default connect((state) => {return state.tasks}, {loadTask})(App);
