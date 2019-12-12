import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { getProduct } from '../DBUtil/getProduct'
import { runInThisContext } from 'vm'


class CustomerCart extends Component{
    
    constructor(props){
        super(props)
        this.rows = []
    }
    

    add(sku, name, cost){
        console.log(sku);
        var found = false, foundI=-1;
        for(let i = 0; i < this.rows.length; i++){
            if(this.rows[i].SKU == sku)
            {
                found = true;
                foundI=i;
                break;
            }
        }
        if(found){
            this.rows[foundI].amount++;
        }
        else{
            this.rows.push({SKU: sku, label: name, price: cost, amount :1})
        }
        this.setState({state: this.state})
        
    }

    totalVal(){
        let total = 0;
        for(let i = 0; i < this.rows.length; i++){
            console.log(this.rows[i].price)
            total+= this.rows[i].price * this.rows[i].amount;
        }
        console.log(total)
        return total;
    }

    renderRows = rows => <Row><Col>{rows.label}</Col><Col>{rows.price}</Col><Col>{rows.amount}</Col> </Row>;

    render(){
        const rows = this.rows;
        return(
            <Card bg="dark">
            <Card.Header>Cart</Card.Header>
            {rows.map(this.renderRows)}
        </Card>
        );
     }
}
//style={{fontSize: 20}}
export default CustomerCart;