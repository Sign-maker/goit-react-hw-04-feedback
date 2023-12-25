import { icons } from 'utils/icons';
import css from './Statistics.module.css';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  // если по ТЗ нельзя передать другие пропсы, то опять создадим тот же объект))
  const feedbacks = { good: good, neutral: neutral, bad: bad };
  const feedbackNames = Object.keys(feedbacks);

  return (
    <>
      <div className={css.gradeContainer}>
        {feedbackNames.map(feedbackName => (
          <p key={feedbackName} className={css.statisticsItem}>
            <span className={css.gradeIcon}>{icons[feedbackName]}</span>
            {feedbackName}
            <span className={css.gradeQuantity}>{feedbacks[feedbackName]}</span>
          </p>
        ))}
      </div>
      <p className={css.summary}>Total: {total}</p>
      <p className={css.summary}>
        {icons.positive}
        Positive feedback: {positivePercentage}%
      </p>
    </>
  );
};
