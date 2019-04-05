import React from "react";
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";

const Smurf = ({ age, name, height, id, history }) => {
  return (
    <ListGroupItem
      className="Smurf"
      onClick={() => {
        history.push(`/smurf/${id}`);
      }}
    >
      <ListGroupItemHeading className="mb-3">{name}</ListGroupItemHeading>
      <ListGroupItemText className="mb-1">{height} tall</ListGroupItemText>
      <ListGroupItemText className="mb-1">
        {age} smurf years old
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
