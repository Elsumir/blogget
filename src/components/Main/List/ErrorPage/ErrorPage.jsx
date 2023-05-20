import style from './ErrorPage.module.css';
import {Text} from '../../../../ui/Text';

export const ErrorPage = () => {
  console.log(style);
  return (
    <>
      <Text As="h2" center color="orange">
        404
      </Text>
    </>
  );
};
