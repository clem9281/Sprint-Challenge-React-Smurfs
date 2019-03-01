import React, { Component } from "react";
import axios from "axios";
import { Container } from "reactstrap";
import { Route } from "react-router-dom";

import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import SmurfNav from "./components/SmurfNav";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => console.log(err));
  }
  appendNewSmurfData = newData => {
    this.setState({ smurfs: newData });
  };
  deleteSmurf = (e, id) => {
    e.preventDefault();
    console.log(id);
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="App bg-light min-vh-100">
        <Container>
          <SmurfNav />
          <Route
            path="/"
            exact
            render={props => (
              <Smurfs
                {...props}
                smurfs={this.state.smurfs}
                deleteSmurf={this.deleteSmurf}
              />
            )}
          />
          <Route
            path="/smurf-form"
            render={props => (
              <SmurfForm {...props} sendDataUpToApp={this.appendNewSmurfData} />
            )}
          />
        </Container>
      </div>
    );
  }
}

export default App;
