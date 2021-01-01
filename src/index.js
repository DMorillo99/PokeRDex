import React from 'react';
import ReactDOM from 'react-dom';
import Nav from "./Components/MenuF";
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import App from './App';
import Pokemons from './Components/getPokemons';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter /*basename={baseUrl}*/>
    <div>
      {/* <Redirect
        from=""
        to="/home" /> */}
      <React.Fragment>
        <Nav />
      </React.Fragment>
      <Route path="/home" component={App} />
      <Route path="/" component={App} exact />
      <Route path="/pokemons" render={() => <Pokemons />} exact />

    </div>
    {/*<App />*/}
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
