import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { useState } from 'react';
import { STATES } from 'constants/state';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () =>
    countTotalFeedback() ? Math.round((good * 100) / countTotalFeedback()) : 0;

  const onLeaveFeedback = feedbackName => {
    switch (feedbackName) {
      case STATES.good:
        setGood(state => state + 1);
        break;
      case STATES.neutral:
        setNeutral(state => state + 1);
        break;
      case STATES.bad:
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  const total = countTotalFeedback();

  return (
    <>
      <Section title="Please, leave feedback">
        <FeedbackOptions
          options={Object.values(STATES)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
