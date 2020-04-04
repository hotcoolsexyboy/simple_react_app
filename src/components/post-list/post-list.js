import React from 'react';
import PostListItem from '../post-list-item/post-list-item'

const PostList = () => {
  return(
    <div className = "app-list list-group">
      <PostListItem />
      <PostListItem />
      <PostListItem />
    </div>
  )
}

export default PostList;