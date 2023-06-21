import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import React from 'react';
import './AppointmentCard.css';

export const AppointmentCard = ({client, doctor, date, time}) => {

    return (
      <Card className="appointmentCardDesign" style={{ width: "18rem" }}>

      <ListGroup className="list-group-flush">
        <ListGroup.Item>Client: {client}</ListGroup.Item>
        <ListGroup.Item>Doctor: {doctor}</ListGroup.Item>
        <ListGroup.Item>Date: {date}</ListGroup.Item>
        <ListGroup.Item>Time: {time}</ListGroup.Item>
      </ListGroup>
        <Card.Body>
          <Card.Link href="#">Details</Card.Link><br></br>
          <Card.Link href="#">Edit</Card.Link><br></br>
          <Card.Link href="#">Cancel</Card.Link>
        </Card.Body>
    </Card>
    )
}