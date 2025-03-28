import { NavLink } from 'react-router-dom';
import s from './HeaderNav.module.css';
import clsx from 'clsx';

type Props = {
name: string
}


const HeaderNav = ({name}: Props) => {
  return (
    <>
      <nav>
        <ul className={clsx(s[name], s.navList)}>
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
    </>
  );
};

export default HeaderNav;
