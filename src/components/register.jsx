import React, { PureComponent } from "react";

import Form from "./common/form";
import Joi from "joi-browser";
class Register extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {}
  };
  schema = {
    username: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required()
      .label("Username"),
    password: Joi.string()
      .min(5)
      .max(15)
      .required()
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name")
  };

  doSubtmit = () => {
    //..Call to the server.
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1> Register </h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default Register;
