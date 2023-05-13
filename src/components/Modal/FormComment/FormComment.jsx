import style from './FormComment .module.css';
import {Text} from '../../../ui/Text';
import {useContext} from 'react';
import {authContext} from '../../../context/authContext';
import {useDispatch, useSelector} from 'react-redux';
import {updateComment} from '../../../store';

export const FormComment = () => {
  const value = useSelector((state) => state.comment);
  const dispatch = useDispatch();
  const {auth} = useContext(authContext);
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };
  const handlerChange = (e) => {
    dispatch(updateComment(e.target.value));
  };
  return (
    <form onSubmit={handlerSubmit} className={style.form}>
      <Text As="h3" size={14} tsize={18}>
        {auth.name}
      </Text>
      <textarea
        defaultValue={value}
        onChange={handlerChange}
        className={style.textarea}
      ></textarea>
      <button className={style.btn}>Отправить</button>
    </form>
  );
};
