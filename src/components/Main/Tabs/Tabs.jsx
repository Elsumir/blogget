/* eslint-disable react/prop-types */
import {useEffect, useState} from 'react';
import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {assignId} from '../../../utils/generedRandon';

import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as TopIcon} from './img/top.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as BestIcon} from './img/best.svg';
import {ReactComponent as HotIcon} from './img/hot.svg';
import {debounceRaf} from '../../../utils/debounceRaf';

import {Text} from '../../../ui/Text';
import {useNavigate} from 'react-router-dom';

const LIST = [
  {value: 'Главная', Icon: HomeIcon, link: 'rising'},
  {value: 'Топ', Icon: TopIcon, link: 'top'},
  {value: 'Лучшее', Icon: BestIcon, link: 'best'},
  {value: 'Горячие', Icon: HotIcon, link: 'hot'},
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownDown, setIsDropdownDown] = useState(true);
  const [isNameBtn, setIsNameBtn] = useState('Главная');
  const navigate = useNavigate();

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropdownDown(true);
    } else {
      setIsDropdownDown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  return (
    <div className={style.container}>
      {isDropdownDown && (
        <div className={style.wrapperBtn}>
          <button
            className={style.btn}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {isNameBtn}
            <ArrowIcon width={15} height={15} />
          </button>
        </div>
      )}

      {(isDropdownOpen || !isDropdownDown) && (
        <ul className={style.list} onClick={() => setIsDropdownOpen(false)}>
          {LIST.map(({value, link, id, Icon}) => (
            <li className={style.item} key={id}>
              <button
                className={style.btn}
                onClick={() => {
                  setIsNameBtn(value);
                  navigate(`/category/${link}`);
                }}
              >
                {<Text>{value}</Text>}
                {Icon && <Icon width={25} height={25} />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  addItem: PropTypes.func,
};
