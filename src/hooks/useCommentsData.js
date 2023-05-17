import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {commentsRequestAsync} from '../store/comment/actionComment';

export const useCommentsData = (id) => {
  const token = useSelector((state) => state.token.token);
  const comments = useSelector((state) => state.comments.data);
  const loading = useSelector((state) => state.comments.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(commentsRequestAsync(id));
  }, [token]);
  return [comments, loading];
};
