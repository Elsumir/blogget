import Header from './components/Header';
import Main from './components/Main';
import {useDispatch} from 'react-redux';
import {updateToken} from './store/token/actionToken';
import {getToken} from './api/token';
import {Route, Routes} from 'react-router-dom';
// import {FirstPage} from './components/Main/List/FirstPage/FirstPage';

const App = () => {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));
  return (
    <>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Header />
              <Main />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
