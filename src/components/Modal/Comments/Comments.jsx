import style from './Comments .module.css';
import {PropTypes} from 'prop-types';
import {Text} from '../../../ui/Text';
import {PostTime} from '../../Main/List/Post/PostTime/PostTime';
import {useSelector} from 'react-redux';

export const Comments = ({comments}) => {
  const comment = useSelector((state) => state.comments.comments);
  const post = useSelector((state) => state.comments.post);
  console.log(comments);
  const arrComments = [];

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
      {arrComments.map(
        (arrComments) =>
          arrComments.body && (
            <li key={arrComments.id} className={style.item}>
              <Text As="h2" className={style.author} size={18} tsize={22}>
                {arrComments.author}
              </Text>
              <Text As="p" className={style.comment} size={14} tsize={18}>
                {arrComments.body}
              </Text>
              <PostTime date={post.created * 1000} />
            </li>
          )
      )}
    </ul>
  );
};

Comments.propTypes = {
  comments: PropTypes.array,
};
