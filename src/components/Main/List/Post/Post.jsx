import style from './Post.module.css';
import PropTypes from 'prop-types';
import PostPhoto from './PostPhoto';
import PostComtent from './PostComtent';
import PostTime from './PostTime';
import {ReactComponent as DeleteIcon} from './img/delete.svg';
import {Text} from '../../../../ui/Text';

export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;
  return (
    <li className={style.post}>
      <PostPhoto title={title} />
      {/* решил сделать фото компонентом, т.к думаю
      что даный компонент будет еще где то использоваться  */}
      <PostComtent title={title} author={author} />
      {/* решил сделать текстовый контент компонентом, т.к думаю
      что даный компонент будет еще где то использоваться и объеденил
      title & link думая что они будут использоваться всегда вместе  */}
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
      {/* время тоже будет много где использоваться */}
      <button className={style.delete}>
        <DeleteIcon />
      </button>
      {/* Кнопку "удалить" и "рейтинг" не стал выносить в отдельные компоненты,
      потому что не знаю будут ли они еще использоваться */}
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
