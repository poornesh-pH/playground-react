import React, { Component } from 'react';
import Search from './Search';
import Products from './Products';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          category: 'Sporting Goods',
          price: '$49.99',
          stocked: true,
          name: 'Football'
        },
        {
          category: 'Sporting Goods',
          price: '$9.99',
          stocked: true,
          name: 'Baseball'
        },
        {
          category: 'Sporting Goods',
          price: '$29.99',
          stocked: false,
          name: 'Basketball'
        },
        {
          category: 'Electronics',
          price: '$99.99',
          stocked: true,
          name: 'iPod Touch'
        },
        {
          category: 'Electronics',
          price: '$399.99',
          stocked: false,
          name: 'iPhone 5'
        },
        {
          category: 'Electronics',
          price: '$199.99',
          stocked: true,
          name: 'Nexus 7'
        }
      ],
      isAvailable: false,
      searchText: ''
    };
  }
  render() {
    const availablity = e => {
      // const showAvailablity =
      //   e && e.target.type === 'checkbox' && e.target.checked ? true : false;
      // console.log(showAvailablity);
      // if (showAvailablity) {
      //   return this.state.products.filter(product => {
      //     product.stocked === true;
      //   });
      // } else return this.state.products;
    };
    const setValue = e => {
      console.log('in');
      this.setState(() => {
        [e.target.name] = e.target.value;
      });
    };
    console.log(this.state.searchText);
    return (
      <div className="container">
        <h5>Thinking in React</h5>
        <Search setValue={setValue} />
        <Products products={this.state.products} />
      </div>
    );
  }
}
