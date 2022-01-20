import React from 'react';
import ReactDOM from 'react-dom';
import { MainView } from './components/main-view/main-view';

import './index.scss';


class MoviesApplication extends React.Component {
  render() {
    return (
      <MainView />
    );
  }
}


const container = document.getElementsByClassName('app-container')[0];


ReactDOM.render(React.createElement(MoviesApplication), container);