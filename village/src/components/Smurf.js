import React from "react";
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";

const Smurf = props => {
  return (
    <ListGroupItem className="Smurf">
      <ListGroupItemHeading className="mb-3">{props.name}</ListGroupItemHeading>
      <ListGroupItemText className="mb-1">
        {props.height} tall
      </ListGroupItemText>
      <ListGroupItemText className="mb-1">
        {props.age} smurf years old
      </ListGroupItemText>
    </ListGroupItem>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
