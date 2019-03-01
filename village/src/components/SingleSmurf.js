import React from "react";
import { Card, CardBody, CardTitle, Button } from "reactstrap";

const SingleSmurf = props => {
  const thisSmurf = props.smurfs[props.match.params.id];
  if (thisSmurf) {
    const { name, age, height, id } = thisSmurf;
    return (
      <Card className="mt-3">
        <CardBody className="Smurf d-flex justify-content-between">
          <div>
            <CardTitle className="mb-3">{name}</CardTitle>
            <p className="mb-1">{height} tall</p>
            <p className="mb-1">{age}smurf years old</p>
          </div>
          <div className="d-flex flex-column justify-content-around">
            <Button className="d-block" outline color="primary border-0">
              <i className="fas fa-edit ml-1" />
            </Button>
            <Button
              className="d-block"
              outline
              color="secondary border-0"
              onClick={e => props.deleteSmurf(e, id)}
            >
              <i className="fas fa-trash-alt" />
            </Button>
          </div>
        </CardBody>
      </Card>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default SingleSmurf;
