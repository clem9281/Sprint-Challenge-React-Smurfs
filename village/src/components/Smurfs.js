import React, { Component } from "react";
import { ListGroup } from "reactstrap";

import Smurf from "./Smurf";

class Smurfs extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="text-center mt-3">Smurf Village</h1>
        <ListGroup>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                history={this.props.history}
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ListGroup>
      </React.Fragment>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
