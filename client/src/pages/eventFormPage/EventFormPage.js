import React from 'react';
import EventForm from "../../components/eventForm/EventForm";
import Container from "../../components/layout/container/Container" ;
import {Row, Col} from "../../components/layout/grid";


function EventFormPage() {
  return (
    <Container>
      <Row>
        <Col>
          <EventForm/>
        </Col>
      </Row>
    </Container>
  )
}

export default EventFormPage;