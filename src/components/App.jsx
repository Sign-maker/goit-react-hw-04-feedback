import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () =>
    this.countTotalFeedback()
      ? Math.round((this.state.good * 100) / this.countTotalFeedback())
      : 0;

  // first variant
  onLeaveFeedback = feedbackName =>
    this.setState(prevState => {
      return { [feedbackName]: prevState[feedbackName] + 1 };
    });

  //  second variant
  // onLeaveFeedback = event => {
  //   const feedbackName = event.currentTarget.dataset.name;
  //   this.setState(prevState => {
  //     return { [feedbackName]: prevState[feedbackName] + 1 };
  //   });
  // };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

    return (
      <>
        <Section title="Please, leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
