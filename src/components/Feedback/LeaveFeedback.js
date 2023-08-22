// import PropTypes from 'prop-types';
import { FeedbackList, FeedbackListItem, Button } from './LeaveFeedback.styled';

export const FeedbackOptions = ({ options, countFeedback, title }) => {
  return (
    <>
      {title}
      <FeedbackList className="feed-btn-list">
        {options.map(option => (
          <FeedbackListItem
            className="feed-btn-item"
            key={options.indexOf(option)}
          >
            <Button onClick={() => countFeedback(option)}>{option}</Button>
          </FeedbackListItem>
        ))}
      </FeedbackList>
    </>
  );
};
