import React, { Component } from 'react';
import {SmurfCard} from './smurfStyles';
import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <SmurfCard>
            {this.props.smurfs.map(smurf => {
              return (
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                  toggle={this.props.toggle}
                />
              );
            })}
      </SmurfCard>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
