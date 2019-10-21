import React, { Component } from "react"
import Button from "../sharedComponent/Button"
import BackButton from "../sharedComponent/BackButton"
import Card from "../Card"
import ProgressBar from "../sharedComponent/ProgressBar"
import CircleProgressBar from "../sharedComponent/CircleProgressBar/"
import Close from "./closeButton"
import questions from "../../Questions"
import Swal from "sweetalert2"
import StyleSwal from "./swalStyle"

class Quiz extends Component {
  state = {
    counter: 1,
    options: "",
    score: [],
    percent: 0,
    flag: 0,
    question: "",
    test: 0
  }

  /**
   * @param string value of choice
   * get value of choise to calclate score from {event.target,name}
   * push value to score array
   * increase counter 1
   * check half question and last question to show circle progress bar
   */
  clicked = ({ target }) => {
    const { name } = target
    const { score } = this.state
    score[this.state.counter - 1] = parseInt(name)
    this.setState({
      score: score,
      flag: 1,
      counter: this.state.counter + 1
    })
    setTimeout(() => {
      this.setState({ flag: 0 })
    }, 0)

    if (this.state.counter === 9) {
      this.setState({ percent: 50 })
    }
    if (this.state.counter === 18) {
      let inattentionScore = 0
      let hyperactivityScore = 0
      let totalScore = 0
      const { score } = this.state
      for (let i = 0; i < 9; ++i) inattentionScore += score[i]
      for (let i = 9; i < 18; ++i) hyperactivityScore += score[i]
      totalScore = inattentionScore + hyperactivityScore
      localStorage.setItem("inattentionScore", inattentionScore)
      localStorage.setItem("hyperactivityScore", hyperactivityScore)
      localStorage.setItem("totalScore", totalScore)
      localStorage.setItem("score", this.state.score)
      localStorage.setItem("complete", true)
      this.setState({ percent: 100 })
    }
  }
  close = () => {
    Swal.fire({
      title: "Are you sure you want to exit?",
      text:
        "your answers will be lost, you will not be able to know your ADHD type!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!"
    }).then(result => {
      if (result.value) {
        localStorage.clear()
        localStorage.setItem("complete", false)
        this.props.history.push("/dashboard")
      } else {
      }
    })
  }

  /**
   * @private
   */
  options() {
    const direction = ["right", "left"][parseInt(Math.random() * 2)]
    return (
      <div>
        <Button
          colorhover="#fff"
          text_align="left"
          background={
            this.state.score[this.state.counter - 1] === 0 ? "#ED6237" : "#fff"
          }
          color={
            this.state.score[this.state.counter - 1] === 0 ? "#fff" : "#000"
          }
          box_shadow="unset"
          border="3px solid #E8EEF4"
          border_radius="20px"
          fontSize="20px"
          width="70%"
          name={0}
          value={"111111"}
          onClick={this.clicked}
        >
          A&nbsp; Never
        </Button>
        <Button
          colorhover="#fff"
          color={
            this.state.score[this.state.counter - 1] === 1 ? "#fff" : "#000"
          }
          text_align="left"
          background={
            this.state.score[this.state.counter - 1] === 1 ? "#ED6237" : "#fff"
          }
          box_shadow="unset"
          border="3px solid #E8EEF4"
          border_radius="20px"
          fontSize="20px"
          width="70%"
          name={1}
          onClick={this.clicked}
        >
          B&nbsp; Rarely
        </Button>
        <Button
          color={
            this.state.score[this.state.counter - 1] === 2 ? "#fff" : "#000"
          }
          colorhover="#fff"
          text_align="left"
          background={
            this.state.score[this.state.counter - 1] === 2 ? "#ED6237" : "#fff"
          }
          box_shadow="unset"
          border="3px solid #E8EEF4"
          border_radius="20px"
          fontSize="20px"
          width="70%"
          name={2}
          onClick={this.clicked}
        >
          C&nbsp; Sometimes
        </Button>
        <Button
          color={
            this.state.score[this.state.counter - 1] === 3 ? "#fff" : "#000"
          }
          text_align="left"
          colorhover="#fff"
          background={
            this.state.score[this.state.counter - 1] === 3 ? "#ED6237" : "#fff"
          }
          box_shadow="unset"
          border="3px solid #E8EEF4"
          border_radius="20px"
          fontSize="20px"
          width="70%"
          name={3}
          onClick={this.clicked}
        >
          D&nbsp; Often
        </Button>
        {this.state.counter > 1 ? (
          <style>
            {`

      .card22 {
        animation: mymove2 2s;
        animation-fill-mode: forwards;
      }

      @keyframes mymove2 {
        0% {
          margin-top: 10px;
          width: 80%;
          background: #f0f0f;
        }

        100% {
          margin-top: 30px;
          width: 90%;
          background: #fff;
        }
      }

      .aaa {
        animation: mymove 3s;
        animation-fill-mode: forwards;
      }

      @keyframes mymove {
        0% {
          ${direction}: 0px;
        }

        100% {
          ${direction}: 1000px;
        }
      }
`}
          </style>
        ) : (
          <div></div>
        )}
      </div>
    )
  }

  setCounter = () => {
    if (this.state.counter > 1)
      this.setState({ counter: this.state.counter - 1 })
    else this.props.history.push("/quiz-instructions")
  }
  render() {
    const question = questions[this.state.counter - 1]
    let { counter } = this.state
    return this.state.flag ? (
      <div></div>
    ) : this.state.percent === 50 ? (
      <CircleProgressBar
        counter={counter - 1}
        percentRate={50}
        percent="50%"
        title="Good job!"
        description=" you are half way there."
        buttonName="LET’S KEEP GOING!"
        onClick={() => {
          this.setState({ percent: 51 })
        }}
        history={this.props.history}
        onClickBackButton={() => {
          this.setState({ percent: 49 })
          localStorage.setItem("score", this.state.score)
          this.setState({ counter: counter - 1 })
        }}
      />
    ) : this.state.percent === 100 ? (
      <CircleProgressBar
        counter={counter - 1}
        percentRate={100}
        percent="100%"
        title="You are awesome!"
        description="We’re completing your profile now."
        /* Link to '/result/id' */
        to={`/results/${
          localStorage.getItem("inattentionScore") > 12 &&
          localStorage.getItem("hyperactivityScore") > 12
            ? 3 /* id=3 --- '/result/3' */
            : localStorage.getItem("inattentionScore") > 12
            ? 1 /* id=1 --- '/result/1' */
            : localStorage.getItem("hyperactivityScore") > 12
            ? 2 /* id=2 --- '/result/2' */
            : 4 /* id=4 --- '/result/4' */
        }`}
        buttonName="See result"
        onClick={() => {
          this.setState({ percent: 101 })
        }}
        history={this.props.history}
        onClickBackButton={() => {
          this.setState({ percent: 98 })
          localStorage.setItem("score", this.state.score)
          this.setState({ counter: counter - 1 })
        }}
      />
    ) : (
      <div style={{ textAlign: "center" }}>
        <Close type="close" onClick={this.close} />
        <StyleSwal />
        <div>
          <BackButton
            position="absolute"
            onClick={this.setCounter}
            history={this.props.history}
          ></BackButton>
          <ProgressBar counter={this.state.counter}></ProgressBar>
        </div>
        <Card
          question={question}
          options={this.options()}
          c="aaa"
          info={
            <div>
              <p
                style={{
                  textAlign: "justify",
                  marginTop: "10px",
                  height: "90px",
                  padding: "8px 20px"
                }}
              >
                {question}
              </p>
              <br />
              {this.options()}
            </div>
          }
        ></Card>
      </div>
    )
  }
}
export default Quiz
