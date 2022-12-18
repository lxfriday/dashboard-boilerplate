import React, { Component } from 'react'
import styles from './Demo.module.css'

export default class Demo extends Component {
  constructor() {
    super()
    this.state = {
      cnt: 0,
    }
  }
  handleClick1 = () => {
    this.setState({
      cnt: this.state.cnt + 1,
    })
    console.log('合成事件 cnt', this.state.cnt)
    this.setState({
      cnt: this.state.cnt + 1,
    })
    console.log('合成事件 cnt', this.state.cnt)
  }
  handleClick2 = () => {
    setTimeout(() => {
      this.setState({
        cnt: this.state.cnt + 1,
      })
      console.log('定时器 cnt', this.state.cnt)
      this.setState({
        cnt: this.state.cnt + 1,
      })
      console.log('定时器 cnt', this.state.cnt)
    })
  }
  componentDidMount() {
    this.originalButton.addEventListener('click', () => {
      this.setState({
        cnt: this.state.cnt + 1,
      })
      console.log('原生事件 cnt', this.state.cnt)
      this.setState({
        cnt: this.state.cnt + 1,
      })
      console.log('原生事件 cnt', this.state.cnt)
    })
  }
  handleReset = () => {
    this.setState({ cnt: 0 })
    console.log('------------- reset -------------')
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <p>cnt: {this.state.cnt}</p>
        <p>
          <button onClick={this.handleClick1}>合成事件</button>
          <button onClick={this.handleClick2}>定时器</button>
          <button
            ref={(r) => (this.originalButton = r)}>
            原生事件
          </button>
          <button onClick={this.handleReset}>reset</button>
        </p>
      </div>
    )
  }
}
