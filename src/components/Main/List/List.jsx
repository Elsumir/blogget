import style from './List.module.css';
import Post from './Post';
import {useEffect, useRef} from 'react';
// import AuthLoader from '../../../ui/AuthLoader';

import {useBestPost} from '../../../hooks/useBestPost';
import {useDispatch, useSelector} from 'react-redux';
import {bestRequestAsync} from '../../../store/bestPost/actionBestPost';
import {Outlet, useParams} from 'react-router-dom';
import {Text} from '../../../ui/Text';
// import {bestSlice} from '../../../store/bestPost/bestSlice';

export const List = () => {
  const [postData] = useBestPost();
  const po = useSelector((state) => state.best.data);
  const loading = useSelector((state) => state.best.loading);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const {page} = useParams();

  console.log(postData);
  console.log(po);

  useEffect(() => {
    dispatch(bestRequestAsync(page));
  }, [page]);

  useEffect(() => {
    if (!postData.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          dispatch(bestRequestAsync());
          console.log('Вижу');
        }
      },
      {
        rootMargin: '100px',
      }
    );
    console.log(observer);
    observer.observe(endList.current);
    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);

  return (
    <>
      <ul className={style.list}>
        {loading ? (
          <Text As="h2" center>
            Загрузка
          </Text>
        ) : (
          postData.map((postData) => (
            <Post key={postData.id} postData={postData} />
          ))
        )}
        <li ref={endList} className={style.end} />
      </ul>
      <Outlet />
    </>
  );
};
