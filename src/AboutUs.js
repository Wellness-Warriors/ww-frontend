import React from 'react';
import Card from 'react-bootstrap/Card';

class AboutUs extends React.Component {
  render() {
    return (
      <>
        <h1>About Us</h1>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="./img/allee.jpg"/>
          <Card.Body>
            <Card.Title>Allee McCoy</Card.Title>
            <Card.Text>
              Allee is a Speaker Specialist at Microsoft and a future software developer currently living in Bellevue, WA. One of the things she liked about the year 2020 was wearing sweatpants everyday for work, and one of the things she disliked about 2020 was "looking like a gremlin every day.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="./img/shelby.JPG" />
          <Card.Body>
            <Card.Title>Shelby Harner</Card.Title>
            <Card.Text>
              Hello, my name is Shelby Harner. I am a seasoned Executive Assistant and have been in my current role at Amazon for 6 years. Recently I have been getting deeper into the tech aspects of the teams I support, which brought me to Code Fellows to dive into educating myself in order to gain better understanding of the developers that I work with and to also to position myself for a future role change.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="./img/qadree.png" />
          <Card.Body>
            <Card.Title>Qadree Trimble</Card.Title>
            <Card.Text>
              Hello my name is Qadree Trimble. I've had a interesting life journey so far. I died twice in my early years as a child. I joined the Navy at 18 where I learned about computers and software and how to operate and fix them for 8 years. I worked as a Sys Admin/Lan Administrator for 10 years on the east coast after I discharged from service. Then I moved to Seattle in 2014. I graduated culinary school at Le Cordon Bleu in 2016 and even spent a few years in homelessness as I worked at my last job as a Chef Instructor who taught adult apprentices and students coming out of incarceration and homelessness. My reason for stepping into software development is mainly because I want to acquire the skills necessary for building websites and apps for my own business ventures and because I've always fantasized about being a coder and trying it out in life.
              Lastly one of my goals is to be able to give back or pay it forward by teaching teens of color coding as a CTE
              instructor in high school.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="../img/lorenzo.png" />
          <Card.Body>
            <Card.Title>Lorenzo Ortega</Card.Title>
            <Card.Text>
              Hello, my name is Lorenzo. I live in Oregon City, OR and my current goal is to become a Software Developer. I want to continue to grow by being adaptive and open to new ideas. My greatest aspiration is to have a meaningful career as a Software Developer where I can learn to become an effective problem solver, expand upon skill set,  and to interact and learn from other professionals in the field.
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}
export default AboutUs;
