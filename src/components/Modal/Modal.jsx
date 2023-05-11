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

export const Modal = ({id, closeModal}) => {
  const [comments] = useCommentsData(id);
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
  if (comments.length === 0) {
    return ReactDOM.createPortal(
      <div className={style.overlay} ref={overlayRef}>
        <div className={style.modal}>
          <Text As="h2" center className={style.title}>
            Загрузка...
          </Text>
        </div>
      </div>,
      document.getElementById('modal-root')
    );
  } else {
    return ReactDOM.createPortal(
      <div className={style.overlay} ref={overlayRef}>
        <div className={style.modal}>
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

          <FormComment />

          <Comments comments={comments} />

          <button className={style.close} onClick={closeModal}>
            <CloseIcon />
          </button>
        </div>
      </div>,
      document.getElementById('modal-root')
    );
  }
};

Modal.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  closeModal: PropTypes.func,
};
