import React from "react";
import "../styles/index.css";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { Route, Switch } from "react-router-dom";

import Home from "../routes/Home";
import Board from "../routes/Board";
import Login from "../routes/Login";
import NavBar from "./NavBar/NavBar";
import Mypage from "../routes/Mypage";
import Register from "../routes/Register";
import { Alert } from "../components/Alert/Alert";

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
    body {
        // font-family: 맨발의청춘L !important;
        background-color: #eaedf2;
    }
    a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }
    ol, ul, li {
        list-style: none;
    }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Alert />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/board" component={Board} />
        <Route exact path="/mypage" component={Mypage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </>
  );
}

export default App;
