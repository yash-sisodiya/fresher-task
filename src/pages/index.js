import React, { Component } from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';

import RouterOutlet from './router-outlet';
import './index.scss'
class Pages extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Header />
        <div className="page-container">
          <Sidebar />
          <RouterOutlet {...this.props} />
        </div>
      </div>
    );
  }
}

export default Pages;
