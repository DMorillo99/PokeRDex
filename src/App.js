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
    "🅳🅰🅻🆅🅸🅽 🅼🅾🆁🅸🅻🅻🅾"+
    "Minecraft is Love"
    );
    /*Banners*/
    return (
      <div>
        <Helmet>
          <title>Poke Home</title>
        </Helmet>
        <Home/>
      </div >
    );
  }
}

export default App;
