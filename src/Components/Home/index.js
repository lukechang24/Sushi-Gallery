import React, { Component } from "react"
import S from "./style"
import home1 from "../Menu/images/home1.jpg"
import home2 from "../Menu/images/home2.jpg"

class Home extends Component {
    unsubscribe = null
    state = {
        count: 1,
    }
    componentDidMount() {
        this.cycleBackground()
    }
    componentWillUnmount() {
        clearInterval(this.unsubscribe)
    }
    cycleBackground = () => {
        this.unsubscribe = setInterval(() => {
            const slides = document.querySelectorAll(".slide")
            if(slides.length > 0) {
                slides.forEach(slide => {
                    slide.style.opacity = "0"
                })
            }
            slides[this.state.count].style.opacity = "0.9"
            this.setState({
                count: this.state.count === slides.length-1 ? 0 : this.state.count+1
            })
        }, 5000)
    }
    render() {
        return(
            <S.Container1>
                <S.Background className="slide" url={home1}></S.Background>
                <S.Background className="slide" opacity="0" url={home2}></S.Background>
                <S.Background className="slide" opacity="0" url="https://images.pexels.com/photos/3147493/pexels-photo-3147493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></S.Background>
            </S.Container1>
        )
    }
}

export default Home