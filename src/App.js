import React, { Component } from 'react'
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions'
import Statistics from './components/Statistics/Statistics'
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';
// import PropTypes from 'prop-types'

export class App extends Component {
  static defaultProps = {}
  static propTypes = {}

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleClick = (e) => {
    const {name } = e.target;

    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      }
    })

    
  }

  render() {
    return (
      <Section title=''>
        <FeedbackOptions options={this.state} onLeaveFeedback={this.handleClick}></FeedbackOptions>     
        {this.state.good+this.state.neutral+this.state.bad > 0 ? <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.state} positivePercentage={this.state}></Statistics> : <Notification message="No feedback given"></Notification> }
        {/* <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.state} positivePercentage={this.state}></Statistics> */}
      </Section>
    )
  }
}

export default App
