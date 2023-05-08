import style from './PostPhoto.module.css';

import PropTypes from 'prop-types';

export const PostPhoto = ({title, images}) => (
  <img className={style.img} src={images} alt={title} />
);

PostPhoto.propTypes = {
  title: PropTypes.string,
  images: PropTypes.string,
};
