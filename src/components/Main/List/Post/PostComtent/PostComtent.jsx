import style from './PostComtent.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../ui/Text';
import {useParams, Link} from 'react-router-dom';

export const PostComtent = ({title, author, id}) => {
  const {page} = useParams();
  return (
    <div className={style.content}>
      <Text As="h2" className={style.title}>
        <Link className={style.linkPost} to={`/category/${page}/post/${id}`}>
          <Text bold size={14} tsize={22} className={style.linkPost}>
            {title}
          </Text>
        </Link>
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
};

PostComtent.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  selftext: PropTypes.string,
  id: PropTypes.string,
  date: PropTypes.number,
};
