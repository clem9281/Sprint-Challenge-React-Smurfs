import React from "react";
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Button
} from "reactstrap";

const Smurf = ({ age, name, height, id, deleteSmurf }) => {
  return (
    <ListGroupItem className="Smurf d-flex justify-content-between">
      <div>
        <ListGroupItemHeading className="mb-3">{name}</ListGroupItemHeading>
        <ListGroupItemText className="mb-1">{height} tall</ListGroupItemText>
        <ListGroupItemText className="mb-1">
          {age} smurf years old
        </ListGroupItemText>
      </div>
      <div className="d-flex flex-column justify-content-around">
        <Button className="d-block" outline color="primary border-0">
          <i className="fas fa-edit ml-1" />
        </Button>
        <Button
          className="d-block"
          outline
          color="secondary border-0"
          onClick={e => deleteSmurf(e, id)}
        >
          <i className="fas fa-trash-alt" />
        </Button>
      </div>
    </ListGroupItem>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
