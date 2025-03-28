import { NavLink } from 'react-router-dom';
import s from './HeaderNav.module.css';
import clsx from 'clsx';
import { Props } from '../../App.types';

const HeaderNav = ({ name }: Props) => {
  return (
    <>
      <nav>
        <ul className={clsx(s[name], s.navList)}>
          <li className={s.item}>
            <NavLink
              to='/#about'
              onClick={() => {
                document
                  .querySelector('#about')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              About
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to='/posts'>Blog</NavLink>
          </li>
          <li className={s.item}>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HeaderNav;
