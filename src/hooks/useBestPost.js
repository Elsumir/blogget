import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {bestRequestAsync} from '../store/bestPost/actionBestPost';

export const useBestPost = () => {
  const best = useSelector((state) => state.best.data);
  const token = useSelector((state) => state.token.token);
  const loading = useSelector((state) => state.best.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(bestRequestAsync());
  }, [token]);
  return [best, loading];
};
