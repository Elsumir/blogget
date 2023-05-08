import style from './List.module.css';
import Post from './Post';

import notphoto from './img/notphoto.jpg';
import {useBestPost} from '../../../hooks/useBestPost';

export const List = () => {
  const [best] = useBestPost();

  const postData = [];

  const renderPost = () => {
    for (let i = 0; i < best.length; i += 1) {
      const data = best[i].data;
      let img;
      if (data.preview !== undefined) {
        img = data.preview.images[0].source.url;
      } else {
        img = notphoto;
      }
      console.log(img);
      const post = {
        thumbnail: '',
        title: data.title,
        author: data.author,
        ups: data.ups,
        date: '2023-05-11T12:46:00.000Z',
        id: data.id,
        images: img,
      };

      postData.push(post);
    }
  };

  renderPost();
  return (
    <ul className={style.list}>
      {postData.map((postData) => (
        <Post key={postData.id} postData={postData} />
      ))}
    </ul>
  );
};

// {
//   thumbnail: '',
//   title: 'Title2',
//   author: 'Nickname2',
//   ups: 4,
//   date: '2023-05-31T12:46:00.000Z',
//   id: 7768,
// },
// {
//   thumbnail: '',
//   title: 'Title3',
//   author: 'Nickname3',
//   ups: 24,
//   date: '2023-05-01T12:46:00.000Z',
//   id: 20999,
// },
// {
//   thumbnail: '',
//   title: 'Title4',
//   author: 'Nickname4',
//   ups: 2,
//   date: '2023-05-05T12:46:00.000Z',
//   id: 747389,
// }
