import style from './Post.module.css';
import PropTypes from 'prop-types';
import PostPhoto from './PostPhoto';
import PostComtent from './PostComtent';
import PostTime from './PostTime';
import {ReactComponent as DeleteIcon} from './img/delete.svg';
import {Text} from '../../../../ui/Text';

export const Post = ({postData}) => {
  const {title, author, ups, date, id, thumbnail} = postData;

  return (
    <li className={style.post}>
      <PostPhoto title={title} images={thumbnail} />
      <PostComtent title={title} author={author} id={id} />
      <div className={style.rating}>
        <button className={style.up} aria-label="Повысить рейтинг" />
        <Text
          As="p"
          size={12}
          fw="medium"
          color="lowGreen"
          tsize={16}
          className={style.ups}
        >
          {ups}
        </Text>
        <button className={style.down} aria-label="Понизить рейтинг" />
      </div>
      <PostTime date={date} />
      <button className={style.delete}>
        <DeleteIcon />
      </button>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
