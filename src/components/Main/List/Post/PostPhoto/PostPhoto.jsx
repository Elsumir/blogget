import style from './PostPhoto.module.css';
import notphoto from './img/notphoto.jpg';

export const PostPhoto = (title) => (
  <img className={style.img} src={notphoto} alt={title} />
);
