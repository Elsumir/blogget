// import style from './ErrorPage.module.css';
import {Text} from '../../../../ui/Text';
import {useSelector} from 'react-redux';

export const ErrorPage = () => {
  const token = useSelector((state) => state.token.token);
  const tokenType = `&token_type=bearer&state=random_string&expires_in=86400`;
  const scope = `&scope=read+submit+identity`;
  const accessToken = `#access_token=`;
  const firstPage = `auth${accessToken}${token}${tokenType}${scope}`;
  const test = window.location.href;
  const testR = test.replace('https://blogget-iota.vercel.app/', '');
  console.log(firstPage === testR);
  return (
    <>
      {firstPage === testR ? (
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
            404
          </Text>
        </>
      )}
    </>
  );
};
