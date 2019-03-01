import React, { Component } from "react";
import {
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import axios from "axios";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.activeSmurf ? this.props.activeSmurf.name : "",
      age: this.props.activeSmurf ? this.props.activeSmurf.age : "",
      height: this.props.activeSmurf ? this.props.activeSmurf.height : ""
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    axios
      .post("http://localhost:3333/smurfs", { ...this.state })
      .then(res => this.props.sendDataUpToApp(res.data))
      .catch(err => console.log(err));
    this.setState({
      name: "",
      age: "",
      height: ""
    });
    this.props.history.push("/");
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Card className="mt-3">
        <CardBody>
          <h3>{this.props.activeSmurf ? "Update Smurf" : "Add a Smurf"}</h3>
          <Form
            onSubmit={
              this.props.activeSmurf
                ? e =>
                    this.props.updateSmurf(e, this.props.activeSmurf.id, {
                      ...this.state
                    })
                : this.addSmurf
            }
          >
            <FormGroup>
              <Label for="exampleEmail">Name</Label>
              <Input
                onChange={this.handleInputChange}
                placeholder="name"
                value={this.state.name}
                name="name"
                type="name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Height</Label>
              <Input
                onChange={this.handleInputChange}
                placeholder="height"
                value={this.state.height}
                name="height"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Age</Label>
              <Input
                onChange={this.handleInputChange}
                placeholder="age"
                value={this.state.age}
                name="age"
                type="text"
              />
            </FormGroup>

            <Button color="primary" className="d-block mx-auto" type="submit">
              Submit
            </Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default SmurfForm;
