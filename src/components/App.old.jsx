// import React, { Component } from 'react';
// import { FeedbackOptions } from './Feedback/LeaveFeedback';
// import { Statistics } from './Statistic/Statistic';
// import { Section } from './Title/Title';
// import { GlobalStyle } from './GlobalStyle';

// export class App extends Component {
// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };

// countFeedback = option => {
//   this.setState(prevState => {
//     return {
//       [option]: prevState[option] + 1,
//     };
//   });
// };

// countTotalFeedback() {
//   const { good, neutral, bad } = this.state;
//   return good + neutral + bad;

//   // return this.state.good + this.state.neutral + this.state.bad;
// }

// countPositiveFeedbackPercentage() {
//   const { good, neutral, bad } = this.state;
//   let total = good + neutral + bad;
//   return total === 0 ? 0 : (good / total) * 100;

//   // let total = this.state.good + this.state.neutral + this.state.bad;
//   // return total === 0 ? 0 : (this.state.good / total) * 100;
// }

//   render() {
//     const options = ['good', 'neutral', 'bad'];
//     return (
//       <div
//         className="statistics"
//         // style={
//         //   {
//         // height: '100vh',
//         // display: 'flex',
//         // justifyContent: 'center',
//         // alignItems: 'center',
//         // fontSize: 40,
//         // color: '#010101',
//         // }
//         // }
//       >
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={options}
//             countFeedback={this.countFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           <Statistics
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={this.countTotalFeedback()}
//             positivePercentage={this.countPositiveFeedbackPercentage()}
//           />
//         </Section>
//         <GlobalStyle />
//       </div>
//     );
//   }
// }
