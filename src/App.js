import React, { Component } from 'react';
import './App.css';
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
        <table><thead><tr><th align="left">Address</th><th>Address2</th><th>State</th></tr></thead>
        <tbody>{address.map(this.renderAddress)}</tbody></table>

        <table><thead><tr><th align="left">First Name</th><th>Last Name</th><th>Spouse</th></tr></thead>
        <tbody>{members.map(this.renderMembers)}</tbody></table>
      </div>
    );
  }
}

export default App;
