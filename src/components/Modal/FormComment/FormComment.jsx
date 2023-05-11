import style from './FormComment .module.css';
import {Text} from '../../../ui/Text';
import {useRef} from 'react';

export const FormComment = () => {
  const inputRef = useRef(null);

  const handlerSubmit = (e) => {
    e.preventDefault();
    const commentBody = inputRef.current.value;
    console.log(commentBody);
    inputRef.current.value = null;
  };
  return (
    <form className={style.form}>
      <Text As="h3" size={14} tsize={18}>
        Имя авторизованного пользователя
      </Text>
      <textarea ref={inputRef} className={style.textarea}></textarea>
      <button onClick={handlerSubmit} className={style.btn}>
        Отправить
      </button>
    </form>
  );
};
