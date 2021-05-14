import React from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quote: '',
      author: '',
    };
  }
  componentDidMount(){
    this.getZen();
  }

  getZen = async() =>{
    try{

      let zenData = await axios.get(`{process.env.REACT_APP_BACKEND_URL}/zen`);
      console.log('response:',zenData);
      console.log('response:',zenData.quote,zenData.author);

    }catch(error){
      console.log(error);
    }
  }

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
