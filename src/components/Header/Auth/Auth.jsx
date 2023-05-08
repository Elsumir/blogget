import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../ui/Text';
import {useState, useContext} from 'react';
import {tokenContext} from '../../../context/tokenContex';
import {authContext} from '../../../context/authContext';

export const Auth = () => {
  const {delToken} = useContext(tokenContext);
  const {auth} = useContext(authContext);
  const [btnClose, setBtnClose] = useState('dnone');
  const toggleBtn = () => {
    setBtnClose(btnClose === 'dnone' ? 'logout' : 'dnone');
  };

  return (
    <div className={style.container}>
      {auth.name ? (
        <>
          <button onClick={toggleBtn} className={style.btn}>
            <img
              className={style.img}
              src={auth.img}
              title={auth.name}
              alt={`Аватар ${auth.name}`}
            />
            <Text color="red">{auth.name}</Text>
          </button>

          <button onClick={delToken} className={style[btnClose]}>
            <Text As="a" href={'http://localhost:3000'}>
              Выйти
            </Text>
          </button>
        </>
      ) : (
        <Text As="a" href={urlAuth} className={style.authLink}>
          <LoginIcon className={style.svg} />
        </Text>
      )}
    </div>
  );
};
