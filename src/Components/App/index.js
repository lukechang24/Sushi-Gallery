import React from 'react';
import { Route, Switch } from "react-router-dom"

import Navbar from "../Navbar"
import Menu from "../Menu"
import About from "../About"
import Contact from "../Contact"

import S from "./style"

function App() {
  const isMobileDevice = () => (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)
  console.log(isMobileDevice())
  return (
    <S.AppContainer>
      {
        isMobileDevice()
          ?
            null
          :
            <>
            <Navbar />
            <S.EmptySpace></S.EmptySpace>
            </>
      }
      <Switch>
        <Route path="/menu" render={() => <Menu />}></Route>
        <Route path="/about" render={() => <About />}></Route>
        <Route path="/contact" render={() => <Contact />}></Route>
      </Switch>
    </S.AppContainer>
  );
}

export default App;
