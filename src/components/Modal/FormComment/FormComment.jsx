import style from './FormComment .module.css';
import {Text} from '../../../ui/Text';
import {useRef, useContext} from 'react';
import {authContext} from '../../../context/authContext';

export const FormComment = () => {
  const {auth} = useContext(authContext);
  console.log(auth);
  const inputRef = useRef(null);
  // const {author} = useContext(authContext);
  const handlerSubmit = (e) => {
    e.preventDefault();
    const commentBody = inputRef.current.value;
    console.log(commentBody);
    inputRef.current.value = null;
  };
  return (
    <form className={style.form}>
      <Text As="h3" size={14} tsize={18}>
        {auth.name}
      </Text>
      <textarea ref={inputRef} className={style.textarea}></textarea>
      <button onClick={handlerSubmit} className={style.btn}>
        Отправить
      </button>
    </form>
  );
};
