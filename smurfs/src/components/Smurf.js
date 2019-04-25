import React from "react";

const Smurf = props => {
  return (
  <h4>
  <p>Villager: {props.smurf.name} </p>
  <p>Age: {props.smurf.age} years old </p>
  <p>Height: {props.smurf.height} centimeters tall</p>
  </h4>
  )
};

export default Smurf;