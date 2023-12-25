import { capitalizeFirstLetter } from 'utils/capitalizeFirstLetter';
import css from './FeedbackOptions.module.css';
import { icons } from 'utils/icons';

//  first variant (without attribte, onClick={() => onLeaveFeedback(feedbackName))
export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.btnContainer}>
    {options.map(feedbackName => (
      <button
        key={feedbackName}
        className={css.button}
        onClick={() => onLeaveFeedback(feedbackName)}
      >
        {capitalizeFirstLetter(feedbackName)}
        <span>{icons[feedbackName]}</span>
      </button>
    ))}
  </div>
);

// second variant(add attribte data-name,  onClick={onLeaveFeedback})
// export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
//   <div className={css.btnContainer}>
//     {options.map(feedbackName => (
//       <button
//         key={feedbackName}
//         data-name={feedbackName}
//         className={css.button}
//         onClick={onLeaveFeedback}
//       >
//         {capitalizeFirstLetter(feedbackName)}
//         <span>{icons[feedbackName]}</span>
//       </button>
//     ))}
//   </div>
// );
