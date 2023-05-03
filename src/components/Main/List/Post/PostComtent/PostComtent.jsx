import style from './PostComtent.module.css';
import PropTypes from 'prop-types';

export const PostComtent = ({title, author}) => {
  console.log(style);
  return (
    <div className={style.content}>
      <h2 className={style.title}>
        <a className={style.linkPost} href="#post">
          {title}
        </a>
      </h2>
      <a className={style.linkAuthor} href="#author">
        {author}
      </a>
    </div>
  );
};

PostComtent.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};
