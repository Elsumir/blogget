import style from './PostComtent.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../ui/Text';

export const PostComtent = ({title, author}) => (
  <div className={style.content}>
    <Text As="h2" className={style.title}>
      <Text As="a" size={18} tsize={24} className={style.linkPost} href="#post">
        {title}
      </Text>
    </Text>
    <Text
      As="a"
      size={12}
      tsize={14}
      color="orange"
      className={style.linkAuthor}
      href="#author"
    >
      {author}
    </Text>
  </div>
);

PostComtent.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};
