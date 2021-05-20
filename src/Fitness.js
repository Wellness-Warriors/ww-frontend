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
      workoutEntry: '',
      hasWorkouts: false,
      workouts: [],
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

  workoutHandler = (e) => {
    const id = parseInt(e.target.value);
    this.getWorkout(id);
  }

  getWorkout = (ident) => {
    axios
      .get('https://wger.de/api/v2/exerciseinfo/?limit=100&offset=20')
      .then(response => {
        let allWorkouts = response.data.results;
        let results = allWorkouts.filter(workout => {
          return (workout.category.id === ident);
        });
        this.setState({
          hasWorkouts: true,
          workouts: results,
        });
      });
  }

  render(){

    let allRecipes = (this.state.hasRecipes && this.state.recipes);
    let displayRecipes = allRecipes && this.state.recipes.map((item, index) => {
      return(
        <ListGroup.Item key={index}>
          {item.recipe.label} : {item.recipe.url}
        </ListGroup.Item>
      );
    });

    let selectedWorkouts = this.state.hasWorkouts && this.state.workouts;
    let displayWorkout = selectedWorkouts&&this.state.workouts
      .map((item,idx)=>{
        return (
          <ListGroup.Item key={idx}>
            {/* <h3>{item.category.name}</h3> */}
            <h3>{item.name}</h3>
            Workout Description:
            {(item.description)
              .replace(/(<([^>]+)>)/ig,'')}
          </ListGroup.Item>
        );
      });

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
                    onInput={(e) => this.workoutHandler}
                    as="select"
                    custom
                  >
                    <option value="10">Abs</option>
                    <option value="8">Arms</option>
                    <option value="12">Back</option>
                    <option value="14">Calves</option>
                    <option value="11">Chest</option>
                    <option value="9">Legs</option>
                    <option value="13">Shoulders</option>
                  </Form.Control>
                </Col>
              </Form.Group>
            </Form>
          </Card>
          <ListGroup>
            {displayWorkout}
          </ListGroup>
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

export default Fitness;
