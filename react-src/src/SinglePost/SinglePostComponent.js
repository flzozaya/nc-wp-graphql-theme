import React from 'react';
import PrimaryContent from '../shared/PrimaryContent';
import Sidebar from '../shared/SideBar';
import './index.scss';

const SinglePostComponent = ({ featuredImage, content, title, uri, tags }) => {
  return (
    <div className="container-width layout-sidebar-right">
      <PrimaryContent featuredImage={featuredImage} content={content} title={title} contentURI={uri} />
      <Sidebar tags={tags} />
    </div>
  );
};

export default SinglePostComponent;
