import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Footer from './Footer';
import SavedEntries from './SavedEntries';

class MyProfile extends React.Component {
  constructor(props) {
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

  componentDidMount() {
  }

  componentDidUpdate(){
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

  getEntries = async () => {

    const entries = await axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/entry`, { params: { email: this.props.email } });
    console.log(entries);
    if (entries.data > 0) {
      this.setState({
        hasEntries: true,
        listOfEntries: entries,
      });
    } else {
      this.setState({
        hasEntries: false,
      });
    }
  }

  addEntry = () => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/entry`, {
        email: this.props.email,
        entry: [{
          date: this.state.formDate,
          emotion: this.state.formEmotion,
          notes: this.state.formNotes
        }]
      })
      .then(

        (response)=>{
          this.getEntries();
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

  render() {
    // console.log(this.state.listOfEntries.data.length);

    return (
      <>
        <br />
        <Card border="info" style={{ width: '20rem' }} className="text-center">
          <img src={this.props.picture} alt="" />
          <p>Hello! {this.props.name}</p>
          <p>Logged in with: {this.props.email}</p>
        </Card>
        <br />
        <Card border="info" style={{ width: '20rem' }}>
          <Button id="button" variant="info" onClick={this.handleShow} style={{ width: '20rem' }}>
            New Entry
          </Button>
        </Card>
        {/* look into componentDidUpdate for auto refresh */}

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
                  onInput={(e) => this.setState({ formDate: e.target.value })}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Emotion</Form.Label>
                <Form.Control
                  type="text"
                  onInput={(e) => this.setState({ formEmotion: e.target.value })}
                />

              </Form.Group>

              <Form.Group>
                <Form.Label>Notes</Form.Label>
                <Form.Control
                  type="text"
                  onInput={(e) => this.setState({ formNotes: e.target.value })}
                />
                <Form.Text className="text-muted" />
              </Form.Group>

              <Button
                variant="info"
                onClick={this.submitHandler}
              >Submit
              </Button>

            </Form>
          </Modal.Body>
        </Modal>
        {/* credit Michelle for conditional */}
        {this.state.listOfEntries.data && (this.state.listOfEntries.data.length > 0) &&
          <SavedEntries
            getAllEntries={this.getEntries}
            listOfEntries={this.state.listOfEntries}
            email={this.props.email}
          />
        }

        <div>
          <Footer />
        </div>
      </>
    );
  }
}

export default MyProfile;
