import React, { Component } from "react"
import S from "./style"

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
            slides[this.state.count].style.opacity = "1"
            this.setState({
                count: this.state.count === slides.length-1 ? 0 : this.state.count+1
            })
        }, 5000)
    }
    render() {
        return(
            <S.Container1>
                <S.Background className="slide" url="https://images.pexels.com/photos/858501/pexels-photo-858501.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></S.Background>
                <S.Background className="slide" opacity="0" url="https://images.pexels.com/photos/1422384/pexels-photo-1422384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></S.Background>
                <S.Background className="slide" opacity="0" url="https://images.pexels.com/photos/3147493/pexels-photo-3147493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></S.Background>
            </S.Container1>
        )
    }
}

export default Home