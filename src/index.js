import React from 'react';
import { render } from 'react-dom';
import configureStore from './store';
import ReactDOM from 'react-dom';
import App from './containers/app';
import ImpactBadge from './contracts/impact-badge.sol';
import web3 from './web3';

const store = configureStore();
console.info(web3);
debugger;
render(
    <App store={store}/>,
    document.body
);
