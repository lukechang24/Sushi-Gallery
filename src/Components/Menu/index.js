import React, { Component } from "react"
import Tabletop from "tabletop"
import { withRouter } from "react-router-dom"

import Rolls from "./Rolls"
import Sides from "./Sides"
import Sushi from "./Sushi"
import Others from "./Others"
import Beverages from "./Beverages"
import Combinations from "./Combinations"

import S from "./style"

class Menu extends Component {
    state = {
        tabs: ["Rolls", "Combinations", "Nigiri Sushi", "Sides", "Others", "Beverages"],
        currentTab: "Rolls",
        data: {},
        loading: true,
        lastPos: 0
    }
    componentDidMount() {
        Tabletop.init(
            {
                key: `${process.env.REACT_APP_KEY}`,
                callback: googleData => {
                    // console.log(googleData, "here")
                    const data = googleData
                    this.setState({
                        data: googleData,
                        loading: false
                    })
                },
            }
        )
        window.addEventListener("scroll", this.throttle)
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
        e.target.parentNode.parentNode.classList.add("active")
        this.setState({
            currentTab: e.target.getAttribute("name")
        })
        window.scrollTo(0, 0)
    }
    removeTabs = () => {
        const tabs = document.querySelector(".tabs")
        if(!tabs) { return }
        if(window.scrollY > this.state.lastPos) {
            tabs.style.top = "-70px"
        } else {
            tabs.style.top = "0"
        }
        this.setState({
            lastPos: window.scrollY
        })
    }
    throttle = () => {
        let time = Date.now()
        let fn = this.removeTabs()
        return function() {
            if((time + 75 - Date.now()) < 0) {
                fn()
                console.log("now")
                time = Date.now()
            }
        }     
    }
    handleArrow = (e) => {
        const curIndex = this.state.tabs.indexOf(this.state.currentTab)
        const curTab = e.target.id === "-" ? (curIndex === 0 ? this.state.tabs[this.state.tabs.length-1] : this.state.tabs[curIndex-1]) : curIndex === this.state.tabs.length-1 ? this.state.tabs[0] : this.state.tabs[curIndex+1]
        this.setState({
            currentTab: curTab
        })
        window.scrollTo(0, 0)
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.throttle)
    }
    render() {
        return(
            <S.Container1>
                <S.Overlay></S.Overlay>
                <S.DotDiv>
                    <S.Dot name="Rolls" className={this.state.currentTab === "Rolls" ? "black" : null} onClick={this.changeTab}></S.Dot>
                    <S.Dot name="Combinations" className={this.state.currentTab === "Combinations" ? "black" : null} onClick={this.changeTab}></S.Dot>
                    <S.Dot name="Nigiri Sushi" className={this.state.currentTab === "Nigiri Sushi" ? "black" : null} onClick={this.changeTab}></S.Dot>
                    <S.Dot name="Sides" className={this.state.currentTab === "Sides" ? "black" : null} onClick={this.changeTab}></S.Dot>
                    <S.Dot name="Others" className={this.state.currentTab === "Others" ? "black" : null} onClick={this.changeTab}></S.Dot>
                    <S.Dot name="Beverages" className={this.state.currentTab === "Beverages" ? "black" : null} onClick={this.changeTab}></S.Dot>
                </S.DotDiv>
                <S.ArrowDiv left="5px">
                    <S.LeftArrow className="fas fa-chevron-left" id="-" onClick={this.handleArrow}></S.LeftArrow>
                </S.ArrowDiv>
                <S.ArrowDiv right="5px">
                    <S.RightArrow className="fas fa-chevron-right" id="+" onClick={this.handleArrow}></S.RightArrow>
                </S.ArrowDiv>
                <S.TabContainer className="tabs">
                    <S.Sign className="active">
                        <S.Tab>
                            <S.Chain left></S.Chain>
                            <S.Chain></S.Chain>
                            <S.TabName name="Rolls" onClick={this.changeTab}>ROLLS</S.TabName>
                        </S.Tab>
                    </S.Sign>
                    <S.Sign>
                        <S.Tab>
                            <S.Chain left></S.Chain>
                            <S.Chain></S.Chain>
                            <S.TabName name="Combinations" onClick={this.changeTab}>COMBINATONS</S.TabName>
                        </S.Tab>
                    </S.Sign>
                    <S.Sign>
                        <S.Tab>
                            <S.Chain left></S.Chain>
                            <S.Chain></S.Chain>
                            <S.TabName name="Nigiri Sushi" onClick={this.changeTab}>NIGIRI SUSHI</S.TabName>
                        </S.Tab>
                    </S.Sign>
                    <S.Sign>
                        <S.Tab>
                            <S.Chain left></S.Chain>
                            <S.Chain></S.Chain>
                            <S.TabName name="Sides" onClick={this.changeTab}>SIDES</S.TabName>
                        </S.Tab>
                    </S.Sign>
                    <S.Sign>
                        <S.Tab>
                            <S.Chain left></S.Chain>
                            <S.Chain></S.Chain>
                            <S.TabName name="Others" onClick={this.changeTab}>OTHERS</S.TabName>
                        </S.Tab>
                    </S.Sign>
                    <S.Sign>
                        <S.Tab>
                            <S.Chain left></S.Chain>
                            <S.Chain></S.Chain>
                            <S.TabName name="Beverages" onClick={this.changeTab}>BEVERAGES</S.TabName>
                        </S.Tab>
                    </S.Sign>
                </S.TabContainer>
                <S.TitleDiv className={this.state.loading ? "hide" : ""} color={this.state.currentTab === "Rolls" ? "false" : "true"}>
                    <S.Title tab={this.state.currentTab}>{this.state.currentTab.toUpperCase()}</S.Title>
                </S.TitleDiv>
                {
                    this.state.loading
                        ?
                            <S.Spinner className="fas fa-circle-notch fa-spin"></S.Spinner>
                        :
                    this.state.currentTab === "Rolls"
                        ?
                            <Rolls freshRolls={this.state.data.freshRolls} cookedRolls={this.state.data.cookedRolls}/>
                        :
                    this.state.currentTab === "Combinations"
                        ?
                            <Combinations entrees={this.state.data.entrees} bentos={this.state.data.bentos} sushiCombos={this.state.data.sushiCombo}></Combinations>
                        :
                    this.state.currentTab === "Nigiri Sushi"
                        ?
                            <Sushi data={this.state.data} sushi={this.state.data.sushi}/>
                        :
                    this.state.currentTab === "Sides"
                    ?
                        <Sides data={this.state.data} sides={this.state.data.sides}/>
                    :
                    this.state.currentTab === "Others"
                        ?
                            <Others sides={this.state.data.sides} noodles={this.state.data.noodles} salads={this.state.data.salads} donburi={this.state.data.donburi} partyTrays={this.state.data.partyTrays} desserts={this.state.data.desserts}/>
                        :
                            <Beverages beverages={this.state.data.beverages}/>
                    }
            </S.Container1>
        )
    }
}

export default withRouter(Menu)