import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import SavedEntries from './SavedEntries';

class MyProfile extends React.Component{
  constructor(props){
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

  render(){
    console.log(this.props);
    return(

      <>

        <div>
          <h1>Hello from MyProfile component</h1>

          <img
            src={this.props.picture}
            alt={this.props.name}/>

          <p>{this.props.email}</p>
        </div>


        <Button variant="primary" onClick={this.handleShow}>
          {''}
          New Entry
        </Button>
        <Modal show={this.state.setShow} onHide={this.handleClose}>
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
                variant="primary"
                onClick={this.submitHandler}
              >Submit
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
