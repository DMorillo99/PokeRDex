import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Home from "./Components/home";


class App extends Component {
  state = {};
  render() {
    console.log(
      "\n"+
      "\n"+
    "██████╗░░█████╗░██╗░░██╗███████╗██████╗░██████╗░███████╗██╗░░██╗"+"\n"+
    "██╔══██╗██╔══██╗██║░██╔╝██╔════╝██╔══██╗██╔══██╗██╔════╝╚██╗██╔╝"+"\n"+
    "██████╔╝██║░░██║█████═╝░█████╗░░██████╔╝██║░░██║█████╗░░░╚███╔╝░"+"\n"+
    "██╔═══╝░██║░░██║██╔═██╗░██╔══╝░░██╔══██╗██║░░██║██╔══╝░░░██╔██╗░"+"\n"+
    "██║░░░░░╚█████╔╝██║░╚██╗███████╗██║░░██║██████╔╝███████╗██╔╝╚██╗"+"\n"+
    "╚═╝░░░░░░╚════╝░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚═════╝░╚══════╝╚═╝░░╚═╝"+"\n"+
    "\n"+
    "\n"+
    "🅳🅰🅻🆅🅸🅽 🅼🅾🆁🅸🅻🅻🅾"
    );


    return (
      <Container>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Home/>
      </Container>
    );
  }
}

export default App;
