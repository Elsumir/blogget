import style from './List.module.css';
import Post from './Post';

import notphoto from './img/notphoto.jpg';
import {useBestPost} from '../../../hooks/useBestPost';

export const List = () => {
  const [best] = useBestPost();

  const postData = [];

  for (let i = 0; i < best.length; i += 1) {
    const data = best[i].data;
    let img;
    if (data.thumbnail !== 'self' && data.thumbnail !== 'default') {
      img = data.preview.images[0].source.url;
    } else {
      img = notphoto;
    }

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

  return (
    <ul className={style.list}>
      {postData.map((postData) => (
        <Post key={postData.id} postData={postData} />
      ))}
    </ul>
  );
};
