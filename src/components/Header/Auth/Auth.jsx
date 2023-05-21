import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../ui/Text';
import {useState} from 'react';
import {deleteToken} from '../../../store/token/actionToken';
import {useDispatch} from 'react-redux';
import {useAuth} from '../../../hooks/useAuth';
import AuthLoader from '../../../ui/AuthLoader';

export const Auth = () => {
  // const {delToken} = useContext(tokenContext);
  const [auth, loading] = useAuth();
  const [btnClose, setBtnClose] = useState('dnone');
  const dispatch = useDispatch();

  const delToken = (e) => {
    dispatch(deleteToken());
  };

  const toggleBtn = () => {
    setBtnClose(btnClose === 'dnone' ? 'logout' : 'dnone');
  };
  return (
    <div className={style.container}>
      {loading ? (
        <AuthLoader />
      ) : auth.name ? (
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
            <Text As="a" href="/">
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
