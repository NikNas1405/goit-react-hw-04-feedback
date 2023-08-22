import { FeedbackOptions } from './Feedback/LeaveFeedback';
import { Statistics } from './Statistic/Statistic';
import { Section } from './Title/Title';
import { GlobalStyle } from './GlobalStyle';

import { useState } from 'react';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countFeedback = option => {
    console.log(option);
    switch (option) {
      case 'good':
        setGood(
          prevState => prevState + 1
          // console.log('click')
        );
        break;
      case 'neutral':
        setNeutral(
          prevState => prevState + 1
          // console.log('click')
        );
        break;
      case 'bad':
        setBad(
          prevState => prevState + 1
          // console.log('click')
        );
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    let total = good + neutral + bad;
    return total === 0 ? 0 : (good / total) * 100;
  };

  const options = ['good', 'neutral', 'bad'];

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} countFeedback={countFeedback} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
      <GlobalStyle />
    </div>
  );
}
