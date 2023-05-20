import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {bestRequestAsync} from '../store/bestPost/actionBestPost';
import notphoto from '../components/Main/List/img/notphoto.jpg';

// import AuthLoader from '../ui/AuthLoader';

export const useBestPost = () => {
  const best = useSelector((state) => state.best.data);
  const token = useSelector((state) => state.token.token);
  // const loading = useSelector((state) => state.best.loading);
  const dispatch = useDispatch();
  const postData = [];
  useEffect(() => {
    dispatch(bestRequestAsync());
  }, [token]);
  for (let i = 0; i < best.length; i += 1) {
    const data = best[i].data;
    const img = notphoto;
    // if (
    //   data.thumbnail !== 'self' &&
    //   data.thumbnail !== 'default' &&
    //   data.thumbnail !== 'spoiler'
    // ) {
    //   img = data.preview.images[0].source.url;
    // } else {
    //   img = notphoto;
    // }

    const post = {
      thumbnail: '',
      title: data.title,
      author: data.author,
      ups: data.ups,
      date: data.created * 1000,
      id: data.id,
      images: img,
      selftext: data.selftext,
    };
    postData.push(post);
  }

  return [postData];
};
