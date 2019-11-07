import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

function SearchBar(props){
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand className="mr-auto">Hattiesburg Country Club - POS System</Navbar.Brand>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
            <Nav.Link>Carol</Nav.Link>
            <Nav.Link>Logout</Nav.Link>

        </Navbar>
    )
}

export default SearchBar