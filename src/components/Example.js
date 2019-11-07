import React from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Collapse } from 'react-bootstrap';

function Example(props){

    const [open, setOpen] = React.useState(false);
    const url = 'https://scx1.b-cdn.net/csz/news/800/2018/balticsea.jpg'
    return (
        <Card  bg="dark" border="primary" text="white" style={{width: 650}}>
            <Card.Img src={url} variant="top" alt='The Baltic Sea'/>
            <Card.Title>My name is {props.name}</Card.Title>
            <Button variant="outline-primary" size="lg"
                onClick={()=> setOpen(!open)}
                aria-controls="ex"
                area-expanded={open} >
                Show Text
            </Button>
            
            <Collapse in={open}>
                <div id="example-collapse-text">
                The Baltic Sea is a marginal sea of the Atlantic Ocean,
                enclosed by Denmark, Estonia, Finland, Latvia, Lithuania,
                Sweden, northeast Germany, Poland, Russia and the North
                and Central European Plain.
                </div>
                </Collapse>
        </Card>
    );
}

export default Example