import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import './AddMember.css';
import {addMember} from '../DBUtil/addMember'



class AddMemberPage extends Component{
  
    
  
    
    state = {
        member: {
          firstname: "Gang",
          lastname: "Heyy",
          spouse:"Tiffany",
          phone:"410",
          email:"trpip",
          Membership:"",
          address:"102Bre",
          address2:"104 apt",
          city:"hat",
          district:"MS",
          postal:"12341"

          
        }
      }  
    
      componentDidMount(){
        
      }
      
      
      onClick = _ => {
        const {member } = this.state;
        addMember(member.firstname, member.lastname, member.spouse, member.email, member.Membership, member.address, member.address2, member.district, member.city, member.postal, member.phone);
      }

    render(){
      
      const { member } = this.state;
      return (
        <div className="App">
          <h1>Add Member</h1>
          <form>
          <table id="inputTable">
            <tr>
              <td>First Name:</td>
              <td>Last Name:</td>
              <td>Spouse Name:</td>
            </tr>
            <tr>
              <td><input type="text" value= {member.firstname} onChange={e => {this.setState({member : {...member, firstname: e.target.value}})}}/></td>
              <td><input type="text" value= {member.lastname} onChange={e => {this.setState({member : {...member, lastname: e.target.value}})}}/></td>
              <td><input type="text"value= {member.spouse} onChange={e => {this.setState({member : {...member, spouse: e.target.value}})}}/></td>
            </tr>
            <tr>
              <td>Phone Number:</td>
              <td>Email:</td>
              <td>Membership:</td>              
            </tr>
            <tr>
              <td><input type="text" value= {member.phone} onChange={e => {this.setState({member : {...member, phone: e.target.value}})}}/></td>
              <td><input type="email" value= {member.email} onChange={e => {this.setState({member : {...member, email: e.target.value}})}}/></td>
              <td><select style={{width:"60%"}} onChange={e => {this.setState({member : {...member, Membership: e.target.value}})}}>
                        <option>               </option>
                        <option value="social">Social</option>
                        <option value="tennis">Tennis</option>
                        <option value="golf"  >Golf</option>
                      </select></td>              
            </tr>
            <tr>
              <td>Address:</td>
              <td colSpan="2">Address 2:</td>
            </tr>
            <tr>
              <td><input type="text"value= {member.address} onChange={e => {this.setState({member : {...member, address: e.target.value}})}}/></td>
              <td colSpan="2"><input type="text" value= {member.address2} onChange={e => {this.setState({member : {...member, address2: e.target.value}})}}/></td>
            </tr>
            <tr>
              <td>City:</td>
              <td>State: </td>
              <td>Postal Code:</td>              
            </tr>
            <tr>
              <td><input type="text" value= {member.city} onChange={e => {this.setState({member : {...member, city: e.target.value}})}}/></td>
              <td><input type="text" value= {member.district} onChange={e => {this.setState({member : {...member, district: e.target.value}})}}/></td>
              <td><input type="text" value= {member.postal} onChange={e => {this.setState({member : {...member, postal: e.target.value}})}}/></td>              
            </tr>
          </table>
          </form>
          
            <button style={{marginTop: "5px"}} onClick={this.onClick}>Submit Member</button>
        </div>
      );
      
    }
    
  }
  
  export default AddMemberPage;
  
  