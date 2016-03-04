import React, { Component } from 'react';
import ipfs from 'ipfs-js';

const HASH = 'QmWXZLoAmaiG6NzX5SSr6SetF9o2azsSnXYrY96G5Hpz6d';
ipfs.setProvider();

export default class Task extends Component {
  constructor(props) {
      super(props);
      this.state = {
          title: '',
          description: '',
      };
  }

  render() {
    return (
        <div>
            <h2>{this.state.title}</h2>
            <p>{this.state.description}</p>
        </div>
    );
  }
  componentDidMount() {
      ipfs.catJson(HASH, (err, data) => {
          console.info(data);
          this.setState(data);
      });
  }
}
