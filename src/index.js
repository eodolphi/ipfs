import React from 'react';
import { render } from 'react-dom';
import configureStore from './store';
import ReactDOM from 'react-dom';
import App from './containers/app';

const store = configureStore();

render(
    <App store={store}/>,
    document.getElementById('root')
);
