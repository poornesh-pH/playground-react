import React, { Component } from 'react';
import Search from './Search';
import Products from './Products';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <h5>Thinking in React</h5>
        <Search />
        <Products />
      </div>
    );
  }
}
