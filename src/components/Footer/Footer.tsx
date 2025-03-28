import s from './Footer.module.css';
import { NavLink } from 'react-router-dom';
import icons from '../../assets/images/icons.svg';
import HeaderNav from '../HeaderNav/HeaderNav';
import SocialMedia from '../SocialMedia/SocialMedia';
import clsx from 'clsx';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={clsx('container', s.footerContainer)}>
        <div className={s.wrapper}>
          <NavLink to='/' className={s.logo}>
            <svg width='229' height='16'>
              <use href={`${icons}#logo`}></use>
            </svg>
          </NavLink>
          <HeaderNav name='footer' />
          <form className={s.searchForm}>
            <input
              type='text'
              className={s.searchInput}
              placeholder='type here ...'
            />
            <button type='submit' className={s.searchBtn}>
              <svg width='16' height='16'>
                <use href={`${icons}#search`}></use>
              </svg>
            </button>
          </form>
        </div>
        <SocialMedia name='footer'/>
        <p className={s.text}>
          Get inspired! Receive discounts, tips and behind the scenes stories.
        </p>
        <form className={s.form}>
          <input type='email' className={s.input} placeholder='Your email' />
          <button type='submit' className={s.btn}>
            Subscribe
          </button>
        </form>
        <div className={s.privacyContainer}>
          <ul className={s.footerList}>
            <li>
              <a href='#'>Privacy Policy</a>
            </li>
            <li>
              <a href='#'>Terms of Service</a>
            </li>
          </ul>
          <p className={s.rights}>© thestyledlife 2024, All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
