import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function CustomerCart(){
    return(
        <Card bg="dark">
            <Card.Header>Cart</Card.Header>
            <Row >
                <Col>SrixonBall</Col>
                <Col>x2</Col>
                <Col>$38.97</Col>
            </Row>
            <del>
            <Row>
                <Col>JackClub</Col>
                <Col>x1</Col>
                <Col>$399.99</Col>
            </Row>
            </del>
            <Row>
                <Col>BerryClub</Col>
                <Col>x1</Col>
                <Col>$279.99</Col>
            </Row>
        </Card>
    )
}
//style={{fontSize: 20}}
export default CustomerCart