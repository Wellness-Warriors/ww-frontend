import React from 'react';
import './savedEntries.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

class SavedEntries extends React.Component{


  handleDeleteRequest = (id) => {
    console.log(id);
    const email = this.props.email;
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/entry/${id}?user=${email}`)
      .then((response)=>{
        this.props.getAllEntries();
      });

  }

  render(){
    const arrOfEntries = this.props.listOfEntries.data[0].entry;
    return(
      <div>
        <br />
        {(arrOfEntries.length > 0)?
          <Container>
            <Carousel>
              {arrOfEntries.map((entry,idx)=>(
                <Carousel.Item key={idx}>
                  <img
                    className="d-block w-100"
                    src="./img/black-sand.jpg"
                    alt="nature-background"
                    height="500"
                  />
                  <Carousel.Caption>
                    <h3>{entry.date}</h3>
                    <h3>{entry.emotion}</h3>
                    <p>{entry.notes}</p>

                    <Button
                      variant="info"
                      onClick={()=>this.handleDeleteRequest(entry._id)}
                    >Delete Entry
                    </Button>

                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Container>
          :<h3>Welcome! Click the New Entry button above to begin adding new entries</h3>
        }
        <br />
      </div>
    );
  }
}

export default SavedEntries;
