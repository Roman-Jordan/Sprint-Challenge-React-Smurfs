//Dependencies
import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
//Components
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
//styles
import {GlobalStyle} from './Styles';
import {Modal} from './components/smurfStyles'
import {Header} from './components/smurfStyles';


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
      .put(`http://localhost:3333/smurfs/${smurf}`,smurf)
      .then(res => this.setState({smurfs:res.data}))
      .catch(err => (console.log(err)))
  }

  removeSmurf = smurf =>{
    smurf = smurf.currentTarget.dataset.set;
    console.log(smurf)
    axios
      .delete(`http://localhost:3333/smurfs/${smurf}`)
      .then(res => this.setState({smurfs:res.data}))
      .catch(err => (console.log(err)))
  }

  
  className = '';
  
  toggleModal = e =>{
    let location = e.currentTarget.getAttribute('name');
    location = e.target.classList.contains('active') ? '':location;
    e.target.classList.toggle('active');
    this.className = e.target.classList.contains('active') ? 'active':'';
    this.props.history.push(location);
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
          <button name="addSmurf" onClick={this.toggleModal}>+</button>
        </Header>
        
        <Route render={props => <Smurfs smurfs={this.state.smurfs} toggle={this.removeSmurf}/>}/>
        <Modal className={this.className}>
          <Route path='/addSmurf' render={props => <SmurfForm addSmurf={this.addSmurf}/>}/>
          <Route path='/updateSmurf' render={props => <SmurfForm smurfs={this.state.smurfs} updateSmurf={this.updateSmurf}/>}/>
        </Modal>
      </div>
    );
  }
}

export default App;
