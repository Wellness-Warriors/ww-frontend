import React from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Footer from './Footer';
// Sentiment is a pretty large library to include on your frontend.
// Lots of data you're forcing users to download.
// It would be more normal to do the actual analysis on your server and do a request with the text the user has typed.
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

  // This is a really weird feature... you have the users type things in, but it doesn't save or do anything
  // long-term with that data. This is strongly contributing to the app feeling like a bunch of bolted-together
  // features, not a complete app.
  getSentiment(e){
    const result = sentiment.analyze(e.target.value);
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

  // unused function

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
              - {this.state.author}
            </Card.Body>
          </Card>
        </Container>
        <br />
        <Container>
          <Card border="info" style={{ width: '20rem' }} className="text-center">
            <h2>Text Analysis</h2>
            <p>How have you been lately?</p>
            <textarea
              onChange={this.getSentiment}/>
          </Card>
        </Container>
        <br />
        <Container>
          <Card border="info" className="text-center">
            <Card.Body>
              <p>
                Sentiment Score:
                {this.state.sentimentScore}
              </p>
              <p>
                General Sentiment:
                {this.state.generalSentiment}
              </p>

            </Card.Body>
          </Card>
          <br/>
        </Container>

        <Container>
          <Card border="info">
            <Card.Body>
              <h6>
                Understanding Your Score  and Further Reading:
              </h6>
              <p>
                Sentiment Score (SC) - Score calculated by adding the sentiment values of recognized words.
              </p>
              <p>
              General Sentiment (GS)- Based on SC, if SC greater than 0 then GS will detect general positivity, if SC less than 0 the GS will detect general negativity in text, if SC equal to 0 then there is net neutrality in text.
              </p>
              <p>
                <a href="https://nealcaren.org/lessons/wordlists/#:~:text=AFINN%20is%20an%20English%20word,consists%20of%202%2C477%20coded%20words.&text=After%20importing%20Afinn%20%2C%20you%20need,%2C%20or%20emoticon%20(%20emoticons%20)."
                >
                  Understanding AFINN-based Results
                </a>
              </p>
              <p>
                <a href="https://www.npmjs.com/package/sentiment#how-it-works"
                >
                  How we calculated your Sentiment Score
                </a>
              </p>
            </Card.Body>
          </Card>
        </Container>

        <div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Home;
