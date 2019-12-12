import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import {getProducts} from '../DBUtil/getProducts'

class ProductTable extends Component{

    constructor(props){
        super(props);
        this.tabClick = this.props.tabClick;
        
    }

    state = {
        products : []
    }
    
    add(){
        this.state.products.push( {SKU: 1, label: "Work", cost: 1234, stock: 76})
        this.setState({state: this.state})
    }
    componentDidMount(){
        getProducts(this);
    }

    componentWillUnmount(){
    
    }

    renderProducts = products =><tr key={products.SKU} ><td name="products" >{products.label}</td><td>{products.cost}</td><td>{products.stock}</td><td>{products.SKU}</td></tr>
    render(){
       const {products} = this.state;
       console.log(products)
       return(
        <Table striped bordered hover variant="dark" onClick={this.tabClick}>
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>SKU</th>
                </tr>
            </thead>

            <tbody>
                {products.map(this.renderProducts)}
            </tbody>

        </Table>
       );
    }
}

export default ProductTable;