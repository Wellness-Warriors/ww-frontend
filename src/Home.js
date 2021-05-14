import React from 'react';
import NavBar from './NavBar';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

class Home extends React.Component {

  onChangeHandler = (e) => {
    e.preventDefault();
    let selected = e.target.value;
    console.log('selected',selected);
  }
  render() {
    return (
      <div>
        Home component
        <NavBar />

        <Card>
          quote
        </Card>

        <Card>
          <Form
            onChange={this.onChangeHandler}>
            <Form.Group
              controlId="exampleForm.SelectCustom">
              <Form.Label>
                Emotion Selection
              </Form.Label>
              <Form.Control
                as="select"
                custom
              >
                <option>Depressed</option>
                <option>Happy</option>
                <option>Sad</option>
                <option>Nervous</option>
                <option>Anxious</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Home;
