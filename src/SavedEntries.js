import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class SavedEntries extends React.Component {
  render() {
    return (

      <Container>
        <br />
        <Card className="text-center" border="info">
          <Card.Header>
            <h3>My Saved Entries</h3>
          </Card.Header>
          <Card.Body>
            <ListGroup>
              <ListGroup.Item>List item goes here</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default SavedEntries;
