import css from './FeedbackOptions.module.css';
import { icons } from 'utils/icons';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.btnContainer}>
    {options.map(feedbackName => (
      <button
        key={feedbackName}
        className={css.button}
        onClick={() => onLeaveFeedback(feedbackName)}
      >
        {feedbackName}
        <span>{icons[feedbackName]}</span>
      </button>
    ))}
  </div>
);
