import React, { Component } from "react"
import Tabletop from "tabletop"

import FreshRolls from "./FreshRolls"
import CookedRolls from "./CookedRolls"
import Sushi from "./Sushi"
import Sides from "./Sides"

import S from "./style"

class Menu extends Component {
    state = {
        tabs: ["Fresh Rolls", "Cooked Rolls", "Sushi", "Sides"],
        currentTab: "Fresh Rolls",
        data: {},
        loading: true
    }
    componentDidMount() {
        Tabletop.init(
            {
                key: '1FrbltyDxYZzZ2AH90UZN91dCfjqS-fbHCfbf0vldBkE',
                callback: googleData => {
                    this.setState({
                        data: googleData,
                        loading: false
                    })
                },
            }
        )
        this.addHover()
    }
    componentDidUpdate() {
        this.addHover()
    }
    addHover = () => {
        const rolls = document.querySelectorAll(".roll")
        rolls.forEach(roll => {
            roll.addEventListener("mouseover", () => {
                roll.classList.add("show")
            })
            roll.addEventListener("mouseleave", () => {
                roll.classList.remove("show")
            })
        })
    }
    changeTab = (e) => {
        const active = document.querySelectorAll(".active")
        if(active.length > 0) {
            for(let i = 0; i < active.length; i++) {
                active[i].classList.remove("active")
            }
        }
        e.currentTarget.className = e.currentTarget.className += " active"
        this.setState({
            currentTab: e.target.innerText
        })
    }
    handleArrow = (e) => {
        const curIndex = this.state.tabs.indexOf(this.state.currentTab)
        const curTab = e.target.id === "-" ? (curIndex === 0 ? this.state.tabs[this.state.tabs.length-1] : this.state.tabs[curIndex-1]) : curIndex === this.state.tabs.length-1 ? this.state.tabs[0] : this.state.tabs[curIndex+1]
        this.setState({
            currentTab: curTab
        })
        window.scrollTo(0, 0)
    }
    render() {
        return(
            <S.Container1>
                <S.ArrowDiv left="5px">
                    <S.LeftArrow className="fas fa-chevron-left" id="-" onClick={this.handleArrow}></S.LeftArrow>
                </S.ArrowDiv>
                <S.ArrowDiv right="5px">
                    <S.RightArrow className="fas fa-chevron-right" id="+" onClick={this.handleArrow}></S.RightArrow>
                </S.ArrowDiv>
                <S.TabContainer>
                    <S.Tab className="active" onClick={this.changeTab}>Fresh Rolls</S.Tab>
                    <S.Tab onClick={this.changeTab}>Cooked Rolls</S.Tab>
                    <S.Tab onClick={this.changeTab}>Sushi</S.Tab>
                    <S.Tab onClick={this.changeTab}>Sides</S.Tab>
                </S.TabContainer>
                {
                    this.state.currentTab === "Sushi" || this.state.currentTab === "Sides"
                        ?
                            <S.TitleDiv>
                                <S.Title>{this.state.currentTab}</S.Title>
                            </S.TitleDiv>
                        :
                            <S.Title>{this.state.currentTab}</S.Title>
                }
                {
                    this.state.currentTab === "Fresh Rolls" || this.state.currentTab === "Cooked Rolls"
                        ?
                            <S.Message>*hover to see more details</S.Message>
                        :
                            null
                }
                {
                    this.state.loading
                        ?
                            <S.Spinner className="fas fa-circle-notch fa-spin"></S.Spinner>
                        :
                    this.state.currentTab === "Fresh Rolls"
                        ?
                            <FreshRolls freshRolls={this.state.data.freshRolls}/>
                        :
                    this.state.currentTab === "Cooked Rolls"
                        ?
                            <CookedRolls cookedRolls={this.state.data.cookedRolls}/>
                        :
                    this.state.currentTab === "Sushi"
                        ?
                            <Sushi sushi={this.state.data.sushi}/>
                        :
                            <Sides sides={this.state.data.sides}/>
                }
            </S.Container1>
        )
    }
}

export default Menu