import style from './Comments .module.css';
import {PropTypes} from 'prop-types';
import {Text} from '../../../ui/Text';
import {PostTime} from '../../Main/List/Post/PostTime/PostTime';

export const Comments = ({comments}) => {
  const comment = comments[1];
  const arrComments = [];
  let date;

  if (comment.length !== 0) {
    date = comments[1][0].created * 1000;
  }

  for (let i = 0; i < comment.length; i += 1) {
    const data = comment[i];
    const com = {
      author: data.author,
      body: data.body,
      created: data.created,
      id: data.id,
    };
    arrComments.push(com);
  }
  return comment.length === 0 ? (
    <Text As="p" center>
      Нет комментариев
    </Text>
  ) : (
    <ul className={style.list}>
      {arrComments.map((arrComments) => (
        <li key={arrComments.id} className={style.item}>
          <Text As="h2" className={style.author} size={18} tsize={22}>
            {arrComments.author}
          </Text>
          <Text As="p" className={style.comment} size={14} tsize={18}>
            {arrComments.body}
          </Text>
          <PostTime date={date} />
        </li>
      ))}
    </ul>
  );
};

Comments.propTypes = {
  comments: PropTypes.array,
};
