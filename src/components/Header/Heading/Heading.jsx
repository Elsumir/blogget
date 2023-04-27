import style from './Heading.module.css';

export const Heading = ({ heading }) => {
  return <h1 className={style.heading}>{heading}</h1>;
};
