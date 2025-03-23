import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import icons from '../../assets/images/icons.svg';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import HeaderNav from '../HeaderNav/HeaderNav';

const Header = () => {
  const isTab = useMediaQuery({ query: '(min-width: 1024px)' });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isTab) {
      setIsOpen(false);
    }
  }, [isTab]);

  return (
    <>
      <header className={!isOpen ? s.header : clsx(s.open, s.header)}>
        <div className={clsx('container', s.headerWrapper)}>
          <NavLink to='/' className={s.logo}>
            <svg width='229' height='16'>
              <use href={`${icons}#logo`}></use>
            </svg>
          </NavLink>
          {!isTab ? (
            <button
              className={s.menuBtn}
              type='button'
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <svg width='20' height='16'>
                <use href={isOpen ? `${icons}#close` : `${icons}#burger`}></use>
              </svg>
            </button>
          ) : (
            <div className={s.navWrapper}>
              <HeaderNav />
              <button type='button' className={s.searchBtn}>
                <svg width='16' height='16'>
                  <use href={`${icons}#search`}></use>
                </svg>
              </button>
            </div>
          )}
        </div>
      </header>

      {isOpen && (
        <div className={s.menuContainer}>
          <div className='container'>
            <input
              type='text'
              className={s.searchInput}
              placeholder='type here ...'
            />
            <HeaderNav />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
