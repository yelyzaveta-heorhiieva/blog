import icons from '../../assets/images/icons.svg';
import { Link } from 'react-router-dom';
import s from './Posts.module.css';
import PostItem from '../PostItem/PostItem';
import { Post } from '../../App.types';

interface Props {
  posts: Post[];
}

const Posts = ({ posts }: Props) => {
  return (
    <section className={s.posts}>
      <div className='container'>
        <div className={s.titleContainer}>
          <h2 className={s.title}>Blog Posts</h2>
          <Link to='/posts' className={s.link}>
            View all posts
            <svg width='24' height='24'>
              <use href={`${icons}#long-arrow`}></use>
            </svg>
          </Link>
        </div>
        <ul className={s.list}>
          {posts.slice(5, 9).map((item) => (
            <li key={`${item.id}`} className={s.card}>
              <PostItem {...item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Posts;
