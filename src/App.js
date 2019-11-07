import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/SearchBar.js'
import CheckoutCard from './components/CheckoutCard'
import ProductTable from './components/ProductTable'
import CustomerCart from './components/CustomerCart'
import {getAddress} from './DBUtil/getAddress';
import {getMembers} from './DBUtil/getMembers';



class App extends Component{
  
  state = {
    address : [],
    members: [],
    member: {
      firstname: "",
      lastname: "",
      spouse:"",
      
    }
  }  

  componentDidMount(){
    getAddress(this)
    getMembers(this)
    
  }

  renderAddress = address =><tr><td key={address.address_id} align="left">{address.address}</td><td align="right">{address.address2}</td><td align="right">{address.district}</td></tr>
  renderMembers = members =><tr><td key={members.id} align="left">{members.firstname}</td><td align="right">{members.lastname}</td><td align="right">{members.spouse}</td></tr>
  

  render(){
    const { address, members, member } = this.state;
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

        <table><thead><tr><th align="left">First Name</th><th>Last Name</th><th>Spouse</th></tr></thead>
        <tbody>{members.map(this.renderMembers)}</tbody></table>
        </header>
      </div>
    );
  }
}

export default App;
