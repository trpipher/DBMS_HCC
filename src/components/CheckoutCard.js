import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function CheckoutCard(props){
    return(
            <Card bg="dark" text="white">
                <Card.Header>Checkout</Card.Header>

                <Container style={{width: "90%", height: "10%"}}>
                    <Card bg="primary" text="white">

                        <Row>
                            <Col>Subtotal</Col>
                            <Col>$318.96</Col>
                        </Row>

                        <Row>
                            <Col>Tax 9.000%</Col>
                            <Col>$28.71</Col>
                        </Row>

                        <Row>
                            <Col><strong>Total</strong></Col>
                            <Col><strong>$347.67</strong></Col>
                        </Row>
                    </Card>
                </Container>

                <Card.Link href="memberpage">Member: 10071</Card.Link>

                <Card.Link>Harrison Wright</Card.Link>
                <Container>
                    <Button style={{width: "40%", display: "inline-block"}} variant="primary" size="lg" text="white">Discount</Button>
                    <hr style={vertical}></hr>
                    <Button style={{width: "40%", display: "inline-block"}} variant="success" size="lg">Payment</Button>
                </Container>
                
                <Card.Body>
                    <Button style={{width: "40%", display: "inline-block"}} variant="danger" size="lg" block>Cancel Order</Button>
                </Card.Body>

                
            </Card>
    )
}

var vertical = {
     width: 20,
    height: 20,
    display: "inline-block",
    visibility: "hidden"

}

export default CheckoutCard