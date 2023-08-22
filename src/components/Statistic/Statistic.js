import { Notification } from '../Notification/Notification';
import {
  FeedbackTotalListItem,
  FeedbackTotalList,
  PositivePercentage,
  Total,
} from './Statistic.styled.js';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  title,
}) => {
  return (
    <>
      {title}
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <FeedbackTotalList className="feed-total-list">
          <FeedbackTotalListItem className="feed-total-list-item good-total">
            Good: {good}
          </FeedbackTotalListItem>
          <FeedbackTotalListItem className="feed-total-list-item neutral-total">
            Neutral: {neutral}
          </FeedbackTotalListItem>
          <FeedbackTotalListItem className="feed-total-list-item bad-total">
            Bad: {bad}
          </FeedbackTotalListItem>
          <Total className="feed-total-list-item">Total: {total}</Total>
          <PositivePercentage className="feed-total-list-item">
            Positive feedback: {positivePercentage.toFixed(0)}%
          </PositivePercentage>
        </FeedbackTotalList>
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
