import React from "react";
import { Card } from "react-bootstrap";

class CardBuilder extends React.Component {
  render() {
    const { event } = this.props;
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body className="text-center">
          <Card.Title className="text-success">
            {event?.title?.toUpperCase()}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            DATE: {event?.date} TIME: {event?.time}
          </Card.Subtitle>
          <Card.Text>
            <i>{event?.description}</i>
          </Card.Text>
          <Card.Text href="#">
            <b>VENUE:</b> {event?.venue}
          </Card.Text>
          <Card.Text href="#">
            <b>TYPE:</b> {event?.type}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default CardBuilder;
