import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import './AddMember.css';
import { addProduct } from '../DBUtil/addProduct';



class AddProductPage extends Component{
  
    
  
    
    state = {
        product: {
          sku: "",
          name: "",
          cost: "",
          stock: ""          
        }
      }  
    
      componentDidMount(){
      }
      
      
      onClick = _ => {
        const {product } = this.state;
        addProduct(product.sku, product.name, product.cost, product.stock)
      }

    render(){
      
      const { product } = this.state;
      return (
        <div className="App">
          <h1>Add Product</h1>
          <form>
          <table id="inputTable">
            <tr>
              <td>SKU:</td>
              <td>Product Name:</td>
            </tr>
            <tr>
              <td><input type="text" value= {product.sku} onChange={e => {this.setState({product : {...product, sku: e.target.value}})}}/></td>
              <td><input type="text" value= {product.name} onChange={e => {this.setState({product : {...product, name: e.target.value}})}}/></td>
            </tr>
            <tr>
              <td>Cost:</td>
              <td>Stock:</td>
            </tr>
            <tr>
              <td><input type="text" value= {product.cost} onChange={e => {this.setState({product : {...product, cost: e.target.value}})}}/></td>
              <td><input type="text" value= {product.stock} onChange={e => {this.setState({product : {...product, stock: e.target.value}})}}/></td>
            </tr>
          </table>
          </form>
          
            <button style={{marginTop: "5px"}} onClick={this.onClick}>Submit Product</button>
        </div>
      );
      
    }
    
  }
  
  export default AddProductPage;
  
  