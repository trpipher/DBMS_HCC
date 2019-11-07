import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import {getAddress} from '../DBUtil/getAddress'
import {getMembers} from '../DBUtil/getMembers'



class AddMemberPage extends Component{
  
    
    state = {
        address : [],
        members: [],
        member: {
          firstname: "Gang",
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
      
      onChange = (e) => {
          this.setState({[e.target.name] : e.target.value})
      }

    render(){

        const myStyle = {
            margin : "15px"
        }

        const { address, members, member } = this.state;
      return (
        <div className="App">
            <form style={{marginLeft:"30px"}}>
                <div align="left">
                    <p style={{whiteSpace:"pre-wrap"}}>First Name:                                          Last Name:</p>
                    <input type='text' value={this.state.member.firstname} onChange={this.onChange}/>
                    <input type='text' style={{marginLeft:"35px"}}/>
                </div>
            </form>
        </div>
      );
    }
  }
  
  export default AddMemberPage;
  
  /*

    */