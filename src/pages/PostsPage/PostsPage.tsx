import React from 'react'
import { postsData } from '../../sources/posts';
import PostItem from '../../components/PostItem/PostItem';

const PostsPage = () => {
  return (
    <ul>
      {postsData.map((item) => (
        <PostItem {...item} />
      ))}
    </ul>
  );
}

export default PostsPage
