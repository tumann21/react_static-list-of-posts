import React from 'react';
import { PostInfo } from './PostInfo';
import { Post } from '../types/Post';
import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="post-container">
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
