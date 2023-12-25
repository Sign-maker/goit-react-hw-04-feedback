import { icons } from 'utils/icons';
import css from './Statistics.module.css';
import { capitalizeFirstLetter } from 'utils/capitalizeFirstLetter';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  // если по ТЗ нельзя передать другие пропсы, то опять родим тот же объект))
  const feedbacks = { good: good, neutral: neutral, bad: bad };
  const feedbackNames = Object.keys(feedbacks);

  return (
    <>
      <div className={css.gradeContainer}>
        {feedbackNames.map(feedbackName => (
          <p key={feedbackName} className={css.statisticsItem}>
            <span className={css.gradeIcon}>{icons[feedbackName]}</span>
            {capitalizeFirstLetter(feedbackName)}
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

// export const Statistics = ({
//   good,
//   neutral,
//   bad,
//   total,
//   positivePercentage,
// }) => {

//   return (
//     <>
//       <div className={css.gradeContainer}>
//         <p className={css.statisticsItem}>
//           <span className={css.gradeIcon}>{icons.good}</span>Good
//           <span className={css.gradeQuantity}>{good}</span>
//         </p>
//         <p className={css.statisticsItem}>
//           <span className={css.gradeIcon}>{icons.neutral}</span>
//           Neutral<span className={css.gradeQuantity}>{neutral}</span>
//         </p>
//         <p className={css.statisticsItem}>
//           <span className={css.gradeIcon}>{icons.bad}</span>
//           Bad<span className={css.gradeQuantity}>{bad}</span>
//         </p>
//       </div>
//       <p className={css.summary}>Total: {total}</p>
//       <p className={css.summary}>
//         {icons.positive}
//         Positive feedback: {positivePercentage}%
//       </p>
//     </>
//   );
// };
