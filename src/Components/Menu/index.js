import React, { Component } from "react"
import FreshRolls from "./FreshRolls"
import CookedRolls from "./CookedRolls"

import S from "./style"

class Menu extends Component {
    state = {
        currentTab: "Fresh Rolls"
    }
    componentDidMount() {
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
        this.setState({
            currentTab: e.target.innerText
        })
    }
    render() {
        return(
            <S.Container1>
                <S.TabContainer>
                    <S.Tab onClick={this.changeTab}>Fresh Rolls</S.Tab>
                    <S.Tab onClick={this.changeTab}>Cooked Rolls</S.Tab>
                    <S.Tab onClick={this.changeTab}>Sushi</S.Tab>
                    <S.Tab onClick={this.changeTab}>Sides</S.Tab>
                </S.TabContainer>
                <S.Title>{this.state.currentTab}</S.Title>
                {
                    this.state.currentTab === "Fresh Rolls"
                        ?
                            <FreshRolls />
                        :
                    this.state.currentTab === "Cooked Rolls"
                        ?
                            <CookedRolls />
                        :
                            "what"
                }
            </S.Container1>
        )
    }
}

export default Menu