import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "../routes/Home";
import Board from "../routes/Board";
import Login from "../routes/Login";
import Mypage from "../routes/Mypage";
import Register from "../routes/Register";
import NavBar from "./NavBar/NavBar";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <>
                    <NavBar/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/Board" component={Board}/>
                    <Route exact path="/Mypage" component={Mypage}/>
                    <Route exact path="/Login" component={Login}/>
                    <Route exact path="/Register" component={Register}/>
                </>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
