import style from './PostTime.module.css';
import PropTypes from 'prop-types';
import formatDate from '../../../../../utils/formatDate';

export const PostTime = (date) => (
  <time className={style.date} dateTime={date.date}>
    {formatDate(date.date)}
  </time>
);

PostTime.propTypes = {
  date: PropTypes.string,
};
