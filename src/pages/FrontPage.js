import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from '../components/SearchBar.js'
import CheckoutCard from '../components/CheckoutCard'
import ProductTable from '../components/ProductTable'
import CustomerCart from '../components/CustomerCart'
import '../App.css';

import {getAddress} from '../DBUtil/getAddress'

class FrontPage extends Component{
  
  state = {
    address : []
  }  

  componentDidMount(){
    getAddress(this);
  }

  renderAddress = address =><tr><td key={address.address_id} align="left">{address.address}</td><td align="right">{address.address2}</td><td align="right">{address.district}</td></tr>

  render(){
    const {address} = this.state;
    console.log("Addr"+ address)
    console.log("test");
    return (
      <div className="App">
      <SearchBar/>
      <header className="App-header" style={{ display: "block"}}>
        <div style={{float:"left", display: "inline-block", width: "70%"}}>
            <ProductTable/>
{/*           <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </div>
        <CheckoutCard/>
        <CustomerCart/>
                
        <table><thead><tr><th align="left">Address</th><th>Address2</th><th>State</th></tr></thead>
        <tbody>{address.map(this.renderAddress)}</tbody></table>
      </header>
    </div>
    );
  }
}

export default FrontPage;
