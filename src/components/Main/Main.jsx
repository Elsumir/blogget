import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import {Route, Routes} from 'react-router-dom';
import Modal from '../Modal';
import {FirstPage} from './List/FirstPage/FirstPage';
import {urlAuth} from '../../api/auth';
import {ErrorPage} from './List/ErrorPage/ErrorPage';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs />
      <Routes>
        <Route path="/category/:page" element={<List />}>
          <Route path="post/:id" element={<Modal />} />
        </Route>
        <Route path={`/${urlAuth}`} element={<FirstPage />}></Route>
        <Route path={`/`} element={<FirstPage />}></Route>
        <Route path={`*`} element={<ErrorPage />}></Route>
      </Routes>
    </Layout>
  </main>
);
