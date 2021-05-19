import React from 'react';
import axios from 'axios';
import Footer from './Footer';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

class Fitness extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workout: '',
      recipeEntry: '',
      hasRecipes: false,
      recipes: [],
    };
  }

  workoutHandler = (e) => {
    e.preventDefault();
    console.log('I submit stuff');
  }

  edamamHandler = (e) => {
    e.preventDefault();
    this.getEdamam();
  }
  getEdamam = () => {

    const options = {
      method: 'GET',
      url: 'https://edamam-recipe-search.p.rapidapi.com/search',
      params: {q: `${this.state.recipeEntry}`},
      headers: {
        'x-rapidapi-key': '1a9fb2435dmsh76acc721cc6c9c6p165fbfjsn83b3b4291f31',
        'x-rapidapi-host': 'edamam-recipe-search.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      if(response.data.hits>0){
        this.setState({
          hasRecipes: true,
          recipes: response.data.hits,
        });
      }else{
        this.setState({
          hasRecipes: false,
        });
      }
    }).catch(function (error) {
      console.error(error);
    });
  }

  render(){
    console.log((this.state.recipes && this.state.recipes.length > 0));

    // const allrecipes = this.state.recipes && (this.state.recipes.length > 0);

    // allrecipes.map((item, index) => (
    //   <ListGroup.Item key={index}>
    //     {item.recipe.label} : {item.recipe.url}
    //   </ListGroup.Item>
    // ));

    return (
      <>
        <br />
        <Container>
          <Card className="text-center" border="info">
            <Form
              onChange={this.workoutHandler}
            >
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
            <Form >
              <h3>Nutritious Recipes</h3>
              <Form.Group controlId="recipeForm">
                <Form.Label>
                  <h5>Enter your ingredient:</h5>
                </Form.Label>
                <Form.Control
                  onInput={(e) => this.setState({recipeEntry: e.target.value})}
                  type="text"
                />
                <Form.Text>
                </Form.Text>
              </Form.Group>
              <Button
                onClick={this.edamamHandler}
                variant="info"
                type="submit">
                Get Recipes
              </Button>
            </Form>

            <ListGroup>
              {/* {allrecipes} */}
            </ListGroup>

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
