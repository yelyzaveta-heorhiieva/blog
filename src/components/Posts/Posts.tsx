import icons from '../../assets/images/icons.svg';
import { Link } from 'react-router-dom';
import s from './Posts.module.css';
import { postsData } from '../../sources/posts';
import PostItem from '../PostItem/PostItem';

const Posts = () => {
  console.log(postsData.length);

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
        <ul>
          {postsData.map((item) => (
            <PostItem {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Posts;
