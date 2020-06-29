import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom"

import Navbar from "../Navbar"
import HamburgerNav from "../HamburgerNav"
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

class App extends Component {
  state = {
    showNav: false
  }
  handleNav = (e) => {
    if(this.state.showNav) {
      e.currentTarget.classList.remove("active")
    } else {
      e.currentTarget.classList.add("active")
    }
    this.setState({
      showNav: !this.state.showNav
    })
  }
  hideNav = () => {
    this.setState({
      showNav: false
    })
  }
  render() {
    return (
      <S.AppContainer>
        <Navbar />
        <HamburgerNav showNav={this.state.showNav} handleNav={this.handleNav} hideNav={this.hideNav}/>
        <S.EmptySpace></S.EmptySpace>
        <Switch>
          <Route exact path="/" render={() => <Home />}></Route>
          <Route path="/menu" render={() => <Menu />}></Route>
          <Route path="/about" render={() => <About />}></Route>
          <Route path="/contact" render={() => <Contact />}></Route>
          <Route component={My404}></Route>
        </Switch>
        {/* <S.Footer></S.Footer> */}
      </S.AppContainer>
    )
  }
}

export default App;
