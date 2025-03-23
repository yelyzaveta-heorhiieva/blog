
import icons from '../../assets/images/icons.svg';
import { NavLink } from 'react-router-dom';
import s from './HeaderNav.module.css';

const HeaderNav = () => {
  return (
    <>
      <nav>
        <ul className={s.navList}>
          <li className={s.item}>
            <NavLink to='/#about'>About</NavLink>
          </li>
          <li className={s.item}>
            <NavLink to='/posts'>Blog</NavLink>
          </li>
          <li className={s.item}>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
      </nav>
      <ul className={s.socialMedia}>
        <li className={s.mediaItem}>
          <a href='https://rss.com'>
            <svg width='16' height='16'>
              <use href={`${icons}#rss`}></use>
            </svg>
          </a>
        </li>
        <li className={s.mediaItem}>
          <a href='https://www.facebook.com'>
            <svg width='16' height='16'>
              <use href={`${icons}#facebook`}></use>
            </svg>
          </a>
        </li>
        <li className={s.mediaItem}>
          <a href='https://www.instagram.com'>
            <svg width='16' height='16'>
              <use href={`${icons}#insta`}></use>
            </svg>
          </a>
        </li>
        <li className={s.mediaItem}>
          <a href='https://x.com'>
            <svg width='16' height='16'>
              <use href={`${icons}#x`}></use>
            </svg>
          </a>
        </li>
        <li className={s.mediaItem}>
          <a href='mailto:blog@gmail.com'>
            <svg width='16' height='16'>
              <use href={`${icons}#mail`}></use>
            </svg>
          </a>
        </li>
      </ul>
    </>
  );
};

export default HeaderNav;
