import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import icons from '../../assets/images/icons.svg';
import clsx from 'clsx';

const Header = () => {
  return (
    <header>
      <div className={clsx('container', s.header)}>
        <NavLink to='/'>
          <svg width='229' height='16'>
            <use href={`${icons}#logo`}></use>
          </svg>
        </NavLink>
        <div className={s.nav}>
          <nav>
            <ul className={s.navList}>
              <li>
                <NavLink to='/#about'>About</NavLink>
              </li>
              <li>
                <NavLink to='/posts'>Blog</NavLink>
              </li>
              <li>
                <NavLink to='/contact'>Contact</NavLink>
              </li>
            </ul>
          </nav>
          <ul className={s.socialMedia}>
            <li>
              <a href='https://rss.com'>
                <svg width='16' height='16'>
                  <use href={`${icons}#rss`}></use>
                </svg>
              </a>
            </li>
            <li>
              <a href='https://www.facebook.com'>
                <svg width='16' height='16'>
                  <use href={`${icons}#facebook`}></use>
                </svg>
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com'>
                <svg width='16' height='16'>
                  <use href={`${icons}#insta`}></use>
                </svg>
              </a>
            </li>
            <li>
              <a href='https://x.com'>
                <svg width='16' height='16'>
                  <use href={`${icons}#x`}></use>
                </svg>
              </a>
            </li>
            <li>
              <a href='mailto:blog@gmail.com'>
                <svg width='16' height='16'>
                  <use href={`${icons}#mail`}></use>
                </svg>
              </a>
            </li>
          </ul>
          <button type='button' className={s.searchBtn}>
            <svg width='16' height='16'>
              <use href={`${icons}#search`}></use>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
