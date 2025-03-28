import s from './SocialMedia.module.css'
import icons from '../../assets/images/icons.svg';
import { Props } from '../../App.types';
import clsx from 'clsx';



const SocialMedia = ({name}: Props) => {
  return (
    <ul className={clsx(s.socialMedia, s[name])}>
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
  );
}

export default SocialMedia
