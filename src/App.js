import React, { Component } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/js/cards.js';
import 'materialize-css/js/animation.js';
import 'materialize-css/js/dropdown.js';
import 'materialize-css/js/sideNav.js';
import Registrar from './components/registrar/registrar.js'
import Participantes from './components/participantes/participantes.js'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Registrado: false,
      User: {}
    }
  }
  setUser = (obj) => this.setState({ User: obj })

  Registrar = () => this.setState({ Registrado: true })

  render() {
    return (
      <div className="App">
        {

        }
        {!this.state.Registrado ? <Registrar registrar={this.Registrar} axios={axios} setUser={this.setUser} /> : <Participantes referencia={this} axios={axios} user={this.state.User}/>}
      </div>
    );
  }
}

export default App;
