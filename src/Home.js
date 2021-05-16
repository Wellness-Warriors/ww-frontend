import React from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
    };
  }
  componentDidMount() {
    this.getZen();
    // how does this approach cause memory leaks?
    // Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
  }

  getZen = async () => {
    try {
      let zenData = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/zen`);
      this.setState({
        quote: zenData.data[0].q,
        author: zenData.data[0].a
      });
    } catch (error) {
      console.log(error);
    }
  }

  onChangeHandler = (e) => {
    e.preventDefault();
    let selected = e.target.value;
    console.log('selected', selected);
  }
  render() {
    return (
      <>
        <NavBar />
        Home component
        <br />
        <Container>
          <Card border="info" className="text-center">
            <Card.Body>
              <h3>
              quote goes here  {this.state.quote}
              </h3>
              -author goes here {this.state.author}
            </Card.Body>
          </Card>
          <br />
          <Card className="text-center" border="info">
            <Form
              onChange={this.onChangeHandler}>
              <Form.Group
                controlId="exampleForm.SelectCustom">
                <Form.Label>
                  <h3>Emotion Selection</h3>
                </Form.Label>
                <Col lg="auto">
                  <Form.Control
                    as="select"
                    custom
                  >
                    <option>Joy</option>
                    <option>Sadness</option>
                    <option>Surprise</option>
                    <option>Fear</option>
                    <option>Anger</option>
                    <option>Disgust</option>
                  </Form.Control>
                </Col>
              </Form.Group>
            </Form>
          </Card>
        </Container>
      </>
    );
  }
}

export default Home;
