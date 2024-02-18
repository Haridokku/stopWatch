import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {isTimerRunning: false, seconds: 0, minutes: 0}
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  onStartTimer = () => {
    this.timerId = setInterval(this.tick, 1000)
    this.setState({isTimerRunning: true})
  }

  tick = () => {
    const {seconds} = this.state
    this.setState(prevState => ({seconds: prevState.seconds + 1}))
    if (seconds === 60) {
      this.setState(prevState => ({minutes: prevState.minutes + 1}))
      this.setState({seconds: 0})
    }
  }

  onStopTimer = () => {
    clearInterval(this.timerId)
    this.setState({isTimerRunning: false})
  }

  /* convertOneDigitToTwoDigit = () =>{
      const {seconds} = this.state
        return seconds >9 ? seconds : 0${seconds}
        const stringifiedMinutes=minutes >9 ? minutes : 0${minutes}
    const stringifiedSeconds=this.convertOneDigitToTwoDigit()
  }
 */

  onReset = () => {
    this.setState({seconds: 0})
    this.setState({minutes: 0})
  }

  render() {
    const {seconds, minutes, isTimerRunning} = this.state
    const stringified = seconds > 9 ? seconds : `0${seconds}`
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    return (
      <div className="app-container">
        <h1 className="head">Stopwatch</h1>
        <div className="content-container">
          <div className="content-header">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="watch"
            />
            <p className="para">Timer</p>
          </div>
          <h1 className="timer">
            {stringifiedMinutes}:{stringified}
          </h1>
          <div className="buttons-container">
            <button
              type="button"
              className="green-button"
              onClick={this.onStartTimer}
              disabled={isTimerRunning}
            >
              Start
            </button>
            <button
              type="button"
              className="red-button"
              onClick={this.onStopTimer}
            >
              Stop
            </button>
            <button
              type="button"
              className="orange-button"
              onClick={this.onReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
  
/*
  import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    timeElapsedInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onResetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timeElapsedInSeconds: 0})
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onStartTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="stopwatch">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer">
              <img
                className="timer-image"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="heading">Timer</p>
            </div>
            <h1 className="stopwatch-timer">{time}</h1>
            <div className="timer-buttons">
              <button
                type="button"
                className="start-button button"
                onClick={this.onStartTimer}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-button button"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-button button"
                onClick={this.onResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
*/
