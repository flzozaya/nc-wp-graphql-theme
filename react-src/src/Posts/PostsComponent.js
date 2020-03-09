import React from 'react';
import PrimaryContentList from '../shared/PrimaryContentList';
import Sidebar from '../shared/SideBar';

import './index.scss';

const PostsComponent = ({ postCount, category, postsList, tags }) => {
  return (
    <div className="container-width layout-sidebar-right">
      <PrimaryContentList postCount={postCount} category={category} postsList={postsList} />
      <Sidebar tags={tags} />
    </div>
  );
};

export default PostsComponent;
