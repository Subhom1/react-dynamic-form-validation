import React, { Component } from "react";
import Form from "./Form";

class Home extends Component {
  render() {
    return (
      <div className="container py-5">
        <h2 className="text-center mb-5">React Dynamic Form With Validation</h2>
        <Form />
      </div>
    );
  }
}

export default Home;
