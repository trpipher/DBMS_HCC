import React, { Component } from 'react';
import './App.css';
import {getAddress} from './DBUtil/getAddress'

class App extends Component{
  
  state = {
    address : []
  }  

  componentDidMount(){
    getAddress(this);
  }

  renderAddress = address =><tr><td key={address.address_id} align="left">{address.address}</td><td align="right">{address.address2}</td><td align="right">{address.district}</td></tr>
  
  

  render(){
    const {address} = this.state;
    return (
      <div className="App">
        <table><thead><tr><th align="left">Address</th><th>Address2</th><th>State</th></tr></thead>
        <tbody>{address.map(this.renderAddress)}</tbody></table>
      </div>
    );
  }
}

export default App;
