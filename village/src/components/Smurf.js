import React from 'react';

const Smurf = props => {
  
  return (
    <div className="Smurf" name={`/updateSmurf/${props.id}`}>

      <h3>{props.name}</h3>
      <p>{props.height} tall</p>
      <p>{props.age} smurf years old</p>
      <button data-set={props.id}  onClick={props.toggle}>Remove Smurf</button>
      <button data-set={props.id}  onClick={props.toggle}>Update Smurf</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

