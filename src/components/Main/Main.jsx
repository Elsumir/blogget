import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import {BestContextProvider} from '../../context/postsContext';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs />
      <BestContextProvider>
        <List />
      </BestContextProvider>
    </Layout>
  </main>
);
