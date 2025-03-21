import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import icons from '../../assets/images/icons.svg';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import HeaderMenu from '../HeaderMenu/HeaderMenu';

const Header = () => {
  const isTab = useMediaQuery({ query: '(min-width: 1024px)' });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isTab) {
  setIsOpen(false)
}
  }, [isTab])

  return (
    <header className={s.header}>
      <div
      className={
        !isOpen
          ? clsx('container', s.headerContainer)
          : clsx('container', s.menuContainer)
      }
      >
          <div className={s.headerWrapper}>
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
                <HeaderMenu />
                <button type='button' className={s.searchBtn}>
                  <svg width='16' height='16'>
                    <use href={`${icons}#search`}></use>
                  </svg>
                </button>
              </div>
            )}
          </div>


        {isOpen && (
          <div className={s.menu}>
            <input
              type='text'
              className={s.searchInput}
              placeholder='type here ...'
            />
            <HeaderMenu />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
