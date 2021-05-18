import React from 'react';
import './savedEntries.css';
// import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

class SavedEntries extends React.Component{

  handleDelete = (e) => {
    e.preventDefault();
    console.log('deleted');
    this.handleDeleteRequest();
  }

  //this.props.getAllEntries()
  handleDeleteRequest = (id,email) => {
    // axios
    //   .delete(`${process.env.REACT_APP_BACKEND_URL}/entry/${id}/${email}`)
    //   .then();

  }

  render(){

    const arrOfEntries = this.props.listOfEntries.data[0].entry;
    console.log(arrOfEntries);
    return(
      <div>
        <br />
        {(arrOfEntries.length > 0)?
          <Container>
            <Carousel>
              {arrOfEntries.map((entry,idx)=>(
                <Carousel.Item key={idx}>
                  <img
                    src="./img/background2.jpeg"
                    alt="nature-background"
                  />
                  <Carousel.Caption>
                    <h3>{entry.date}</h3>
                    <h3>{entry.emotion}</h3>
                    <p>{entry.notes}</p>
                    <Button
                      variant="info"
                      onClick={this.handleDeleteRequest(entry._id,)}
                    >Delete Entry
                    </Button>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Container>
          :<h3>Your Entries will Render Here</h3>
        }
      </div>
    );
  }
}

export default SavedEntries;
