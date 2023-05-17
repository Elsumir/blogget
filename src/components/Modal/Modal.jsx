import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import {useEffect, useRef} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData';
import {Text} from '../../ui/Text';
import {FormComment} from './FormComment/FormComment';
import {Comments} from './Comments/Comments';
// import {useSelector} from 'react-redux';

export const Modal = ({id, closeModal}) => {
  // const comments = useSelector((state) => state.comments.data);
  // console.log(comments);
  const [comments, loading] = useCommentsData(id);
  console.log(loading);
  const post = comments[0];
  const overlayRef = useRef(null);

  const handleClick = (e) => {
    const target = e.target;
    if (target === overlayRef.current) {
      closeModal();
    }
  };

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {loading ? (
          <Text As="h2" center>
            Загрузка...
          </Text>
        ) : (
          <>
            <h2 className={style.title}>{post.title}</h2>
            <div className={style.content}>
              <Markdown
                options={{
                  overrides: {
                    a: {
                      props: {
                        target: '_black',
                      },
                    },
                  },
                }}
              >
                {post.selftext}
              </Markdown>
            </div>
            <Text As="p" className={style.author}>
              {post.author}
            </Text>
            <FormComment /> <Comments comments={comments} />
            <button className={style.close} onClick={closeModal}>
              <CloseIcon />
            </button>
          </>
        )}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  closeModal: PropTypes.func,
};
