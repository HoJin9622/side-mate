import React from "react";
import "../styles/index.css";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../routes/Home";
import Board from "../routes/Board";
import Login from "../routes/Login";
import NavBar from "./NavBar/NavBar";
import Mypage from "../routes/Mypage";
import Register from "../routes/Register";

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
    body {
        font-family: 맨발의청춘R !important;
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
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/board" component={Board} />
          <Route exact path="/mypage" component={Mypage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
