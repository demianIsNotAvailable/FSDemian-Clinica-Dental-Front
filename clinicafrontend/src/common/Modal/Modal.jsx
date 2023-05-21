import react, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Modal from "react-bootstrap/Modal";
import "./Modal.css"

export const AppointmentModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="loginButtonDesign" onClick={()=> handleShow()}>View</div>

      <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Your appointment details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid" id="modalBody">
        <Container>
          <Row>
            <Col lg={4} xs={12} md={8}>
                <span>  Nombre  </span>
            </Col>
            </Row>
            <Row>
            <Col lg={12} xs={12} md={4}>
              Doctor
            </Col>
          </Row>

          <Row>
            <Col lg={12} xs={12} md={4}>
              Fechas
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
      </Modal>
    </>
  );
};
