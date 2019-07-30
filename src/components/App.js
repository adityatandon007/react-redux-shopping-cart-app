import React, { Component } from 'react';
import ProductList from '../containers/ProductList';
import Header from '../containers/Header';

export default class App extends Component {
  render() {
    return (
      <div className='container-fluid app'>
        <div className='row header p-3'>
          <Header />
        </div>
        <div className='row'>
          <ProductList />
        </div>
      </div>
    );
  }
}