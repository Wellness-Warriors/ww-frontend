import React from 'react';
import axios from 'axios';
import Footer from './Footer';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'react-bootstrap/Spinner';

class Food extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeEntry: '',
      hasRecipes: false,
      recipes: [],
    };
  }
  edamamHandler = (e) => {
    e.preventDefault();
    this.getEdamam() && this.setState({
      isLoading: true
    });
  }

  getEdamam = async() => {

    const options = {
      method: 'GET',
      url: 'https://edamam-recipe-search.p.rapidapi.com/search',
      params: {q: this.state.recipeEntry},
      headers: {
        // You exposed this API key in your code. This is very bad.
        // This is what you should be using a .env file for.
        'x-rapidapi-key': '1a9fb2435dmsh76acc721cc6c9c6p165fbfjsn83b3b4291f31',
        'x-rapidapi-host': 'edamam-recipe-search.p.rapidapi.com'
      }
    };
    axios
      .request(options)
      .then( (response) => {
        console.log('response.data:',response.data);
        this.setState({
          isLoading: false,
          hasRecipes: true,
          recipes: response.data.hits
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  render() {

    let allRecipes = (this.state.hasRecipes && this.state.recipes);
    let displayRecipes = allRecipes && this.state.recipes.map((item, index) => {
      return(
        <ListGroup.Item key={index}>
          <img src={item.recipe.image} alt="recipeImage" width="50"></img> <a href={item.recipe.url}>{item.recipe.label}</a>
        </ListGroup.Item>
      );
    });

    return(
      <>
        <br />
        <Container>
          <Card border="info">
            <Form className="text-center">
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

            <br />
            {/* This is the same weird ternary for loading that's in multiple files in your code.
            This is repetitive and should be abstracted into a component that you use. */}
            {(!this.state.isLoading)?
              (<ListGroup>
                {displayRecipes}
              </ListGroup>)
              :
              (
                <Container>
                  <Spinner animation="grow" size="sm" />
                  <Spinner animation="grow" />
                </Container>
              )
            }
          </Card>
        </Container>
        <br />
        <div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Food;
