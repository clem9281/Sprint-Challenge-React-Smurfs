import React, { Component } from "react";
import {
  Row,
  Col,
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
      name: "",
      age: "",
      height: ""
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
      <Row className="SmurfForm">
        <Col
          xs={{ size: 12 }}
          md={{ size: 8, offset: 2 }}
          lg={{ size: 6, offset: 3 }}
        >
          <Card className="mt-3">
            <CardBody>
              <h3>Add a Smurf</h3>
              <Form onSubmit={this.addSmurf}>
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
                  <Label for="exampleEmail">Age</Label>
                  <Input
                    onChange={this.handleInputChange}
                    placeholder="age"
                    value={this.state.age}
                    name="age"
                    type="number"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Height</Label>
                  <Input
                    onChange={this.handleInputChange}
                    placeholder="height"
                    value={this.state.height}
                    name="height"
                    type="number"
                  />
                </FormGroup>

                <Button
                  color="primary"
                  className="d-block mx-auto"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default SmurfForm;
