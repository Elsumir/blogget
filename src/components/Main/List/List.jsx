import style from './List.module.css';
import Post from './Post';
import {useEffect, useRef} from 'react';
// import AuthLoader from '../../../ui/AuthLoader';

import {useBestPost} from '../../../hooks/useBestPost';
import {useDispatch} from 'react-redux';
import {bestRequestAsync} from '../../../store/bestPost/actionBestPost';

export const List = () => {
  const [postData] = useBestPost();
  const endList = useRef(null);
  const dispatch = useDispatch();

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
    observer.observe(endList.current);
  }, [endList.current]);

  return (
    <ul className={style.list}>
      {postData.map((postData) => (
        <Post key={postData.id} postData={postData} />
      ))}
      <li ref={endList} className={style.end} />
    </ul>
  );
};
