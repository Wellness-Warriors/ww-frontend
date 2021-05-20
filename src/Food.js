import React from 'react';
import axios from 'axios';
import Footer from './Footer';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

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

    axios
      .request(options)
      .then( (response) => {
        console.log('response.data:',response.data);
        this.setState({
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
            <ListGroup>
              {displayRecipes}
            </ListGroup>
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
