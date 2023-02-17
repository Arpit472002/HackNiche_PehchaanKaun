import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import card from "../images/logo512.png";

const Blog = () => {
  return (
    <div className="p-10">
      <div className="hero bg-base-200 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={card}
            className="max-w-sm rounded-lg shadow-2xl" alt="card1"
          />
          <div className="pl-8">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      {/* <div className="text-2xl p-12">Blogs</div>
      <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}
    </div>
  );
};

export default Blog;
