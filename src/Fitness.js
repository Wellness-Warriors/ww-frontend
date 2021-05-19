import React from 'react';
import Footer from './Footer';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class Fitness extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workout: '',
    };
  }

  workoutHandler = (e) => {
    e.preventDefault();
    console.log('I submit stuff');
  }

  render() {
    return (
      <>
        <br />
        <Container>
          <Card className="text-center" border="info">
            <Form
              onChange={this.workoutHandler}>
              <Form.Group
                controlId="MuscleForm.SelectCustom">
                <Form.Label>
                  <h3>Muscle Group Selection</h3>
                </Form.Label>
                <Col lg="auto">
                  <Form.Control
                    as="select"
                    custom
                  >
                    <option>Shoulder</option>
                    <option>Back</option>
                    <option>Abdomen</option>
                    <option>Arms</option>
                    <option>Legs</option>
                    <option>Glutes</option>
                  </Form.Control>
                </Col>
              </Form.Group>
            </Form>
          </Card>
        </Container>
        <br />

        <Container>
          <Card className="text-center" border="info">
            <Form>
              <h3>Nutritious Recipes</h3>
              <Form.Group controlId="recipeForm">
                <Form.Label>
                  <h5>Enter your ingredient:</h5>
                </Form.Label>
                <Form.Control type="text" />
                <Form.Text>
                </Form.Text>
              </Form.Group>
              <Button variant="info" type="submit">
                Get Recipes
              </Button>
            </Form>
          </Card>
        </Container>

        <div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Fitness;
