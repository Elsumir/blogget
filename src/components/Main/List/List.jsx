import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postData = [
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Nickname1',
      ups: 77,
      date: '2023-05-11T12:46:00.000Z',
      id: 21223,
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nickname2',
      ups: 4,
      date: '2023-05-31T12:46:00.000Z',
      id: 7768,
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nickname3',
      ups: 24,
      date: '2023-05-01T12:46:00.000Z',
      id: 20999,
    },
    {
      thumbnail: '',
      title: 'Title4',
      author: 'Nickname4',
      ups: 2,
      date: '2023-05-05T12:46:00.000Z',
      id: 747389,
    },
  ];
  return (
    <ul className={style.list}>
      {postData.map((postData) => (
        <Post key={postData} postData={postData} />
      ))}
    </ul>
  );
};
