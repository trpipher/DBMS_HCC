import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import {getProducts} from '../DBUtil/getProducts'

class ProductTable extends Component{

    state = {
        products : []
    }

    componentDidMount(){
        getProducts(this);
    }

    renderProducts = products =><tr><td key={products.SKU}>{products.label}</td><td>{products.cost}</td><td>{products.stock}</td><td>{products.SKU}</td></tr>
    render(){
       const {products} = this.state;
       console.log(products)
       return(
        <Table striped bordered hover variant="dark">
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