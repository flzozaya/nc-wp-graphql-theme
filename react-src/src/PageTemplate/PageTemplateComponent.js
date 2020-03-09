import React from 'react';
import { Image, Transformation } from 'cloudinary-react';
import _get from 'lodash/get';
import { parseStringToHTML } from '../lib';
import Sidebar from '../shared/SideBar';
import './PageTemplate.scss';

const PageTemplateComponent = ({ featuredImage, content, title, tags }) => {
  const altText = _get(featuredImage, 'altText', '');
  const sourceUrl = _get(featuredImage, 'sourceUrl', '');
  const imageFileName = sourceUrl.split('/').pop();

  return (
    <div id="page-template" className="with-main-margin-top">
      <header>
        <Image className="page-template__hero-image" publicId={imageFileName} alt={altText}>
          <Transformation height="250" width="1080" gravity="center" crop="fill" />
        </Image>
      </header>

      <div className="container-width layout-sidebar-right page-template__wrapper">
        <main id="primary" className="page-template__content">
          <h1 className="page-template__content-title">{parseStringToHTML(title)}</h1>
          <div className="page-template__content-area">{parseStringToHTML(content)}</div>
        </main>

        {/* <PrimaryContent featuredImage={featuredImage} content={content} title={title} contentURI={''} /> */}
        <Sidebar tags={tags} />
      </div>
    </div>
  );
};

export default PageTemplateComponent;
