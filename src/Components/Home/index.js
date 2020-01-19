import React, { Component } from "react"
import S from "./style"

class Home extends Component {
    unsubscribe = null
    state = {
        count: 0,
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
                <S.Background className="slide" url="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"></S.Background>
                <S.Background className="slide" opacity="0" url="https://www.channelfutures.com/files/2019/10/Focus-877x432.jpg"></S.Background>
                <S.Background className="slide" opacity="0" url="https://static.techspot.com/images2/news/bigimage/2019/08/2019-08-08-image-18.jpg"></S.Background>
            </S.Container1>
        )
    }
}

export default Home