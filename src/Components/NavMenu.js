import React, { Component } from "react"
import "../Style/Main.css";
import Container from 'react-bootstrap/Container'
import "bootstrap/dist/css/bootstrap.min.css"

class Navs extends Component {
  state = {}
  render() {
    return (
      <div>
        <div className="Mbanner">
          <h1>Pokemon</h1>
        </div>
        {/* Menu */}
        <Container fluid>
          <div class="navbar">
            <a href="/home">Home</a>
            <a href="/pokemons">Pokemons</a>
            <a href="/links">Links</a>
          </div>
        <br/>
        </Container>
      </div>
    );
  }
}

export default Navs;


