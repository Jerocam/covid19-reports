import React, {useState} from "react";
import { Card } from "react-bootstrap";
import NumberFormat from 'react-number-format';

function NewCard(props){

    const [variant] = useState(props.variant);

    return(
        <Card style={{height:"16rem"}} className={`bg-${variant} mb-3 cardStyle`}>
            <Card.Header><h2>{props.header}</h2></Card.Header>
            <Card.Body>
                <Card.Title style={{fontSize:"2.9em"}}>{props.title}</Card.Title>
                <Card.Text>
                    <NumberFormat style={{fontSize:"1.6em", fontWeight:'bold'}} value={props.text} displayType={'text'} thousandSeparator={true}/>
                </Card.Text>
            </Card.Body>
        </Card>
    );
    
}

export default NewCard;