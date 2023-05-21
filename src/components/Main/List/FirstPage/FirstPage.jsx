import style from './FirstPage.module.css';
import {Text} from '../../../../ui/Text';
import {useSelector} from 'react-redux';

export const FirstPage = () => {
  const token = useSelector((state) => state.token.token);
  console.log(style);

  return (
    <>
      {token ? (
        <>
          <Text As="h2" center>
            Стартовая страница
          </Text>
          <Text As="p" center>
            Добро пожаловать
          </Text>
          <Text As="p" center>
            Выберите категорию
          </Text>
        </>
      ) : (
        <>
          <Text As="h2" center color="orange">
            Авторизуйтесь
          </Text>
        </>
      )}
    </>
  );
};
