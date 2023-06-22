import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import React from 'react';
import './AppointmentCard.css';

export const AppointmentCard = ({client, doctor, date, time, editHandler, deleteHandler}) => {

    return (
      <Card className="appointmentCardDesign" style={{ width: "18em" }}>

      <ListGroup className="list-group-flush">
        <ListGroup.Item>Client: {client}</ListGroup.Item>
        <ListGroup.Item>Doctor: {doctor}</ListGroup.Item>
        <ListGroup.Item>Date: {date}</ListGroup.Item>
        <ListGroup.Item>Time: {time}</ListGroup.Item>
      </ListGroup>
        <Card.Body>
          <Card.Link href="#" onClick={editHandler}>Edit</Card.Link><br></br>
          <Card.Link href="#" onClick={deleteHandler}>Cancel</Card.Link>
        </Card.Body>
    </Card>
    )
}