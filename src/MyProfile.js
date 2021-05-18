import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import SavedEntries from './SavedEntries';

class MyProfile extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      setShow: false,
      show: false,
      formDate: '',
      formEmotion: '',
      formNotes: '',
      hasEntries: false,
      listOfEntries: [],
    };
  }

  componentDidMount(){
    this.getEntries();
  }

  submitHandler = (e) => {
    e.preventDefault();

    this.setState({
      setShow: false,
    });

    this.addEntry();
    this.getEntries();

    console.log('submit handler: submitted');
  }

  getEntries = async() => {
    console.log(this.props.email);
    const entries = await axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/entry`,{params: {email:this.props.email}});
    console.log(entries);
    this.setState({
      hasEntries: true,
      listOfEntries: entries,
    });

  }

  addEntry = () => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/entry`,{
        email: this.props.email,
        entry: [{
          date: this.state.formDate,
          emotion: this.state.formEmotion,
          notes: this.state.formNotes
        }]
      })
      .then(
        (response)=>{
          console.log('serverResponse:', response);
        });
  }

  handleShow = (e) => {
    this.setState({
      setShow: true,
    });
  };
  handleClose = () => {
    this.setState({
      setShow: false,
    });
  }
  render(){
    // console.log(this.state.listOfEntries.data.length);

    return(

      <>
        <Card style={{ width: '14rem' }}>
          <h1>Welcome to your profile {this.props.name}</h1>
          <img
            src={this.props.picture}
            alt={this.props.name}
          />
          <p>{this.props.email}</p>
        </Card>

        <Card style={{ width: '14rem' }}>
          <Button variant="primary" onClick={this.handleShow}>
            {''}
            New Entry
          </Button>
        </Card>

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
                  onInput={(e)=> this.setState({formDate: e.target.value})}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Emotion</Form.Label>
                <Form.Control
                  type="text"
                  onInput={(e)=> this.setState({formEmotion: e.target.value})}
                />

              </Form.Group>

              <Form.Group>
                <Form.Label>Notes</Form.Label>
                <Form.Control
                  type="text"
                  onInput={(e)=> this.setState({formNotes: e.target.value})}
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

        {this.state.hasEntries &&
          <SavedEntries
            getAllEntries={this.getEntries}
            listOfEntries={this.state.listOfEntries}
          />
        }

      </>

    );
  }
}

export default MyProfile;
