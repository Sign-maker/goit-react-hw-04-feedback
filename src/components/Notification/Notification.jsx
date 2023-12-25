import css from './Notification.module.css';

export const Notification = ({ message }) => (
  <div className={css.notification}>{message}</div>
);
