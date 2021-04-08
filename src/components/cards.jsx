import React, {useState} from "react";
import { Card } from "react-bootstrap";

function NewCard(props){

    const [variant] = useState(props.variant);

    return(
        <Card style={{height:"16rem"}} className={`bg-${variant} mb-3 cardStyle`}>
            <Card.Header><h2>{props.header}</h2></Card.Header>
            <Card.Body>
                <Card.Title style={{fontSize:"2.9em"}}>{props.title}</Card.Title>
                <Card.Text>
                    <p style={{fontSize:"1.6em", fontWeight:'bold'}}>{props.text.toLocaleString()}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
    
}

export default NewCard;