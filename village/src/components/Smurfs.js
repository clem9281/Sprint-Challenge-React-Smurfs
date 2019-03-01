import React, { Component } from "react";
import { Row, Col, ListGroup } from "reactstrap";

import Smurf from "./Smurf";

class Smurfs extends Component {
  render() {
    return (
      <Row className="Smurfs">
        <Col
          xs={{ size: 12 }}
          md={{ size: 8, offset: 2 }}
          lg={{ size: 6, offset: 3 }}
        >
          <h1 className="text-center mt-3">Smurf Village</h1>
          <ListGroup>
            {this.props.smurfs.map(smurf => {
              return (
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                />
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
