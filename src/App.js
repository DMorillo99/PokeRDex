import React, { Component } from "react";
import { Helmet } from "react-helmet";


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
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <h1>HOla mundo</h1>
      </div>
    );
  }
}

export default App;