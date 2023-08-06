import React from "react";
import Header from "./Header";
import ICO from "./ICO";
import Balance from "./Balance";
import Transfer from "./Transfer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App(props) {

  return (
    <div id="screen">
      <Header />
      <ICO userPrincipal={props.loggedInPrincipal}/>
      <Balance />
      <Transfer />
    </div>
  );
}

export default App;
