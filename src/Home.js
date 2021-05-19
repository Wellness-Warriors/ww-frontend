import React from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Footer from './Footer';
import Sentiment from 'sentiment';
const sentiment = new Sentiment();

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quote: '',
      author: '',
      sentimentScore: null,
      generalSentiment: null,
    };
    this.getSentiment = this.getSentiment.bind(this);
  }

  componentDidMount(){
    this.getZen();

  }

  getSentiment(e){
    const result = sentiment.analyze(e.target.value);
    console.log(result);
    this.setState({
      sentimentScore: result.score
    });
    if(result.score < 0){
      this.setState({
        generalSentiment: 'negative emotions'
      });
    }else if (result.score > 0){
      this.setState({
        generalSentiment: 'positive emotions'
      });
    }else {
      this.setState({
        generalSentiment: 'neutral emotions'
      });
    }
  }
  getZen = async() =>{
    try{
      let zenData = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/zen`);
      this.setState({
        quote: zenData.data[0].q,
        author: zenData.data[0].a
      });
    }catch(error){
      console.log(error);
    }
  }
  onChangeHandler = (e) => {
    e.preventDefault();
    let selected = e.target.value;
    console.log('selected',selected);
  }
  workoutHandler = (e)=> {
    e.preventDefault();
    console.log('I submit stuff');
  }

  render() {
    return (

      <>
        <NavBar />
        <br />
        <Container>
          <Card border="info" className="text-center">
            <Card.Body>
              <h3>
                {this.state.quote}
              </h3>
              -{this.state.author}
            </Card.Body>
          </Card>
          <br />

          {/* <Card className="text-center" border="info">
            <Form
              onChange={this.onChangeHandler}>
              <Form.Group
                controlId="EmotionForm.SelectCustom">
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
          <br /> */}

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
          <Card border="info" style={{ width: '20rem' }} className="text-center">
            <h2>Text Analysis</h2>
            <p>Tell us about your day:</p>
            <textarea onChange={this.getSentiment}/>
            <p>
              Sentiment Score: {this.state.sentimentScore}
            </p>
            <p>
              General Sentiment: {this.state.generalSentiment}
            </p>
          </Card>
        </Container>
        <br />
        {/* <Container>
          <iframe
            src="https://www.health.gov/myhealthfinder?widget=true"
            name="myhealthfinderframe"
            frameborder="0"
            id="myhealthfinderframe"
            scrolling="yes"
            height="485" width="100%"
            marginheight="0"
            title="myhealthfinder widget"
            marginwidth="0">
            <p>Your browser does not support iframes.
            </p>
          </iframe>
        </Container> */}
        <br />

        <Container>
          <Footer />
        </Container>
      </>

    );
  }
}

export default Home;
