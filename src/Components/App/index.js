import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom"

import Navbar from "../Navbar"
import Home from "../Home"
import Menu from "../Menu"
import About from "../About"
import Contact from "../Contact"

import S from "./style"

const My404 = () => {
  return (
    <div>
      <Redirect to='/' />
    </div>
  )
}

function App() {
  return (
    <S.AppContainer>
      <Navbar />
      <S.EmptySpace></S.EmptySpace>
      <Switch>
        <Route exact path="/" render={() => <Home />}></Route>
        <Route path="/menu" render={() => <Menu />}></Route>
        <Route path="/about" render={() => <About />}></Route>
        <Route path="/contact" render={() => <Contact />}></Route>
        <Route component={My404}></Route>
      </Switch>
    </S.AppContainer>
  );
}

export default App;
