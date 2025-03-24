import clsx from 'clsx';
import s from './PostItem.module.css';
import { Post } from '../../App.types';


const PostItem = ({ url, url_2x, alt, category, date, description }: Post) => {

  return (
    <>
      <img
        srcSet={`${url} 1x, ${url_2x} 2x`}
        src={url}
        alt={alt}
        className={s.cardImg}
      />
      <div className={s.cardWrapper}>
        <p
          className={clsx(
            s.category,
            s[category.toLowerCase().split(' ').join('-')],
          )}
        >
          {category}
        </p>
        <p className={s.date}>{date.toUTCString().slice(5, 16)}</p>
      </div>
      <h3 className={s.text}>{description}</h3>
    </>
  );
};

export default PostItem;
