import React from "react";
import "../styles.css";
import Base from "../core/Base";
import logo from "../assets/logo.png";
import Carousel from 'react-bootstrap/Carousel';
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";


const Home = () => {
  


  return (
    <Base title="" description="">
      {/* <div className="d-flex justify-content-center m-5">
        <img src={logo} className="d-inline-block w-25 mx-auto"></img>
      </div> */}
      {/* <div className="container">
        <h3 className="text-dark text-center m-4">About</h3>
      </div> */}
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Clothes for all ocassion</h3>
      <p>With a wide range from Indian to Western wear</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Shoes for your comfort and style</h3>
      <p>Also available in a ranging variety</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Carry your attitude around</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      <br/>
      <h4>Today's Deals</h4>
      <hr/>
      
<div class="row">
<div class="col-lg-3 col-md-3 col-sm-1">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1561828995-aa79a2db86dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
  <Card.Body>
    <Card.Title>Rings and more</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Add to Cart</Button> &nbsp; <Button variant="warning">Buy Now</Button>
  </Card.Body>
</Card>
<br/>
</div>

&nbsp; &nbsp;
<div class="col-lg-3 col-md-5 col-sm-1">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1521127376958-80338b32f37b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
  <Card.Body>
    <Card.Title>Watches</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Add to Cart</Button>&nbsp; <Button variant="warning">Buy Now</Button>
  </Card.Body>
</Card>
<br/>
</div>
&nbsp; &nbsp;
<div class="col-lg-3 col-md-5 col-sm-1">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1530476591165-92859554a03d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
  <Card.Body>
    <Card.Title>Clocks and more</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Add to Cart</Button>&nbsp; <Button variant="warning">Buy Now</Button>
  </Card.Body>
</Card>
<br/>
</div>
<div class="col-lg-3 col-md-5 col-sm-1">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1544155815-87a399a4712b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
  <Card.Body>
    <Card.Title>Clocks and more</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Add to Cart</Button>&nbsp; <Button variant="warning">Buy Now</Button>
  </Card.Body>
</Card>
<br/>
</div>
</div>
<br/>
    </Base>
  );
};

export default Home;
