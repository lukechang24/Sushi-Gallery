import React, { Component } from "react"
import Tabletop from "tabletop"
import { withRouter } from "react-router-dom"
import menu from "./menu"

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
        lastPos: 0,
        xDown: null,
        yDown: null
    }
    componentDidMount() {
				this.setState({
					data: { ...menu },
					loading: false
				})
				console.log(this.state.data ,"ths")
        window.addEventListener("scroll", this.throttle)
        window.addEventListener('touchstart', this.handleTouchStart, false)
        window.addEventListener('touchmove', this.handleTouchMove, false)
        setTimeout(this.removeSwipeMessage, 750)
    }
    componentDidUpdate() {
        this.addHover()
    }
    getTouches = (e) => {
        return e.touches
    }

    handleTouchStart = (e) => {
        const firstTouch = this.getTouches(e)[0]
        this.setState({
            xDown: firstTouch.clientX,
            yDown: firstTouch.clientY
        })
    }                                          
    
    handleTouchMove = (e) => {
        if(!this.state.xDown || !this.state.yDown) {
            return
        }
        var xUp = e.touches[0].clientX                           
        var yUp = e.touches[0].clientY
    
        var xDiff = this.state.xDown - xUp
        var yDiff = this.state.yDown- yUp
    
        if(Math.abs(xDiff) > Math.abs( yDiff)) {
            if (xDiff > 0) {
                this.nextTab("right")
            } else {
                this.nextTab("left")
            }                       
        } 
        // else {
        //     if (yDiff > 0) {
        //         console.log("up swipe")
        //     } else {
        //         console.log("down swipe")
        //     }
        // }
        this.setState({
            xDown: null,
            yDown: null
        })
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
    selectTab = (e) => {
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
    hideTabs = () => {
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
        let fn = this.hideTabs()
        return function() {
            if((time + 75 - Date.now()) < 0) {
                fn()
                console.log("now")
                time = Date.now()
            }
        }     
    }
    nextTab = (dir) => {
        const curIndex = this.state.tabs.indexOf(this.state.currentTab)
        const curTab = dir === "left" ? (curIndex === 0 ? this.state.tabs[this.state.tabs.length-1] : this.state.tabs[curIndex-1]) : curIndex === this.state.tabs.length-1 ? this.state.tabs[0] : this.state.tabs[curIndex+1]
        this.setState({
            currentTab: curTab
        })
        window.scrollTo(0, 0)
    }
    handleArrow = (e) => {
        if(e.currentTarget.id === "-") {
            this.nextTab("left")
        } else {
            this.nextTab("right")
        }
    }
    removeSwipeMessage = () => {
        const message = document.querySelector("#message")
        message.style.opacity = "0"
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.throttle)
    }
    render() {
        return(
            <S.Container1>
                <S.Overlay></S.Overlay>
                <S.Message id="message">SWIPE TO CHANGE TABS</S.Message>
                <S.DotDiv>
                    <S.Dot name="Rolls" className={this.state.currentTab === "Rolls" ? "black" : null} onClick={this.selectTab}></S.Dot>
                    <S.Dot name="Combinations" className={this.state.currentTab === "Combinations" ? "black" : null} onClick={this.selectTab}></S.Dot>
                    <S.Dot name="Nigiri Sushi" className={this.state.currentTab === "Nigiri Sushi" ? "black" : null} onClick={this.selectTab}></S.Dot>
                    <S.Dot name="Sides" className={this.state.currentTab === "Sides" ? "black" : null} onClick={this.selectTab}></S.Dot>
                    <S.Dot name="Others" className={this.state.currentTab === "Others" ? "black" : null} onClick={this.selectTab}></S.Dot>
                    <S.Dot name="Beverages" className={this.state.currentTab === "Beverages" ? "black" : null} onClick={this.selectTab}></S.Dot>
                </S.DotDiv>
                <S.ArrowDiv id="-" onClick={this.handleArrow} left="-10px">
                    <S.LeftArrow className="fas fa-chevron-left"></S.LeftArrow>
                </S.ArrowDiv>
                <S.ArrowDiv id="+" onClick={this.handleArrow} right="-10px">
                    <S.RightArrow className="fas fa-chevron-right" ></S.RightArrow>
                </S.ArrowDiv>
                <S.TabContainer className="tabs">
                    <S.Sign className="active">
                        <S.Tab>
                            <S.Chain left></S.Chain>
                            <S.Chain></S.Chain>
                            <S.TabName name="Rolls" onClick={this.selectTab}>ROLLS</S.TabName>
                        </S.Tab>
                    </S.Sign>
                    <S.Sign>
                        <S.Tab>
                            <S.Chain left></S.Chain>
                            <S.Chain></S.Chain>
                            <S.TabName name="Combinations" onClick={this.selectTab}>COMBINATONS</S.TabName>
                        </S.Tab>
                    </S.Sign>
                    <S.Sign>
                        <S.Tab>
                            <S.Chain left></S.Chain>
                            <S.Chain></S.Chain>
                            <S.TabName name="Nigiri Sushi" onClick={this.selectTab}>NIGIRI SUSHI</S.TabName>
                        </S.Tab>
                    </S.Sign>
                    <S.Sign>
                        <S.Tab>
                            <S.Chain left></S.Chain>
                            <S.Chain></S.Chain>
                            <S.TabName name="Sides" onClick={this.selectTab}>SIDES</S.TabName>
                        </S.Tab>
                    </S.Sign>
                    <S.Sign>
                        <S.Tab>
                            <S.Chain left></S.Chain>
                            <S.Chain></S.Chain>
                            <S.TabName name="Others" onClick={this.selectTab}>OTHERS</S.TabName>
                        </S.Tab>
                    </S.Sign>
                    <S.Sign>
                        <S.Tab>
                            <S.Chain left></S.Chain>
                            <S.Chain></S.Chain>
                            <S.TabName name="Beverages" onClick={this.selectTab}>BEVERAGES</S.TabName>
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
                            <Rolls freshRoll={this.state.data.freshRoll} cookedRoll={this.state.data.cookedRoll}/>
                        :
                    this.state.currentTab === "Combinations"
                        ?
                            <Combinations bento={this.state.data.bento} sushiCombo={this.state.data.sushiCombo}></Combinations>
                        :
                    this.state.currentTab === "Nigiri Sushi"
                        ?
                            <Sushi data={this.state.data} sushi={this.state.data.nigiri}/>
                        :
                    this.state.currentTab === "Sides"
                    ?
                        <Sides data={this.state.data} side={this.state.data.side}/>
                    :
                    this.state.currentTab === "Others"
                        ?
                            <Others side={this.state.data.side} noodle={this.state.data.noodle} salad={this.state.data.salad} donburi={this.state.data.donburi} partyTray={this.state.data.partyTray} dessert={this.state.data.dessert}/>
                        :
                            <Beverages beverage={this.state.data.beverage}/>
                    }
            </S.Container1>
        )
    }
}

export default withRouter(Menu)