import style from './FirstPage.module.css';
import {Text} from '../../../../ui/Text';

export const FirstPage = () => {
  console.log(style);

  return (
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
  );
};
