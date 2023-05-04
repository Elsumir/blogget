import style from './Heading.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../ui/Text';

export const Heading = ({heading}) => (
  <Text As="h1" size={22} tsize={26} center className={style.heading}>
    {heading}
  </Text>
);

Heading.propTypes = {
  heading: PropTypes.string,
};
