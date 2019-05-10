import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import {GlobalStyle} from './Styles';
import {Header} from './components/smurfStyles';
import axios from 'axios';


class App extends Component {
  
  state = {
      smurfs: [],
  };
  

  componentDidMount(){
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(res => this.setState({smurfs:res.data}))
      .catch(err => (console.log(err)))
  }

  addSmurf = smurf =>{
    
    axios
      .post(`http://localhost:3333/smurfs`,smurf)
      .then(res => this.setState({smurfs:res.data}))
      .catch(err => (console.log(err)))
  }

  updateSmurf = smurf =>{
    axios
      .put(`http://localhost:3333/smurfs`,smurf)
      .then(res => this.setState({smurfs:res.data}))
      .catch(err => (console.log(err)))
  }

  removeSmurf = smurf =>{
    axios
      .delete(`http://localhost:3333/smurfs`,smurf)
      .then(res => this.setState({smurfs:res.data}))
      .catch(err => (console.log(err)))
  }

  



  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    console.log(this.state.smurfs)
    return (
      <div className="App">
        <GlobalStyle/>
        <Header>
          <h1>Smurf Village</h1>
          <button>+</button>
        </Header>
        <Route render={props => <SmurfForm addSmurf={this.addSmurf}/>}/>
        <Route render={props => <Smurfs smurfs={this.state.smurfs} />}/>
      </div>
    );
  }
}

export default App;
