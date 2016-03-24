import React, { Component } from 'react';
import ipfs from 'ipfs-js';

const HASH = 'QmWXZLoAmaiG6NzX5SSr6SetF9o2azsSnXYrY96G5Hpz6d';
ipfs.setProvider();

export default class Task extends Component {
  render() {
    if (this.props.error) {
        return (<div className="error">{this.props.error.toString()}</div>);
    } else if (this.props.loading) {
        return (<div className="loading">loading....</div>);
    } else {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
            </div>
        );
    }
  }
}
