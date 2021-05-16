import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
import SavedEntries from './SavedEntries';

class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setShow: false,
      show: false
    };
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({
      setShow: false,
    });
    console.log('submitted');
  }

  handleShow = (e) => {
    this.setState({
      setShow: true,
    });
  };

  render() {
    console.log(this.props);
    return (

      <>
        <Card style={{ width: '15rem' }} className="text-center">
          Hello from MyProfile component
          <br />
          <img src={this.props.picture} alt="" />
          <p>Hello! {this.props.name}</p>
          <p>Logged in with: {this.props.email}</p>
        </Card>
        <br />
        <Button variant="info" onClick={this.handleShow} style={{ width: '20rem' }}>
          New Entry
        </Button>

        <Modal show={this.state.setShow} onHide={this.handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title>New Entry</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form >

              <Form.Group>
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Emotion</Form.Label>
                <Form.Control
                  type="text"
                />

              </Form.Group>
              <Form.Group>
                <Form.Label>Notes</Form.Label>
                <Form.Control
                  type="text"
                />
                <Form.Text className="text-muted" />
              </Form.Group>

              <Button
                variant="info"
                onClick={this.submitHandler}
              >Add Entry
              </Button>

            </Form>
          </Modal.Body>
        </Modal>

        <SavedEntries />
      </>

    );
  }
}

export default MyProfile;
