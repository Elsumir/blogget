import style from './PostComtent.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../ui/Text';
import {useState} from 'react';
import Modal from '../../../../Modal';

export const PostComtent = ({title, author, id}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className={style.content}>
      <Text As="h2" className={style.title}>
        <Text
          As="a"
          bold
          size={14}
          tsize={22}
          className={style.linkPost}
          href="#post"
          onClick={() => setIsModalOpen(true)}
        >
          {title}
        </Text>
      </Text>
      <Text
        As="a"
        size={12}
        tsize={14}
        color="orange"
        className={style.linkAuthor}
        href="#author"
      >
        {author}
      </Text>
      {isModalOpen && (
        <Modal id={id} closeModal={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

PostComtent.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  id: PropTypes.string,
  date: PropTypes.number,
};
