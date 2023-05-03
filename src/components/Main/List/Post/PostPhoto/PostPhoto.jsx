import style from './PostPhoto.module.css';
import notphoto from './img/notphoto.jpg';

export const PostPhoto = (title) => {
  console.log(style);
  return <img className={style.img} src={notphoto} alt={title} />;
};
