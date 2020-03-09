import React from 'react';
import { Image, Transformation } from 'cloudinary-react';
import { parseStringToHTML } from '../../lib';
import SocialSharer from '../SocialSharer';

import _get from 'lodash/get';
import './index.scss';

const PrimaryContentComponent = ({ featuredImage, content, title, contentURI }) => {
  const altText = _get(featuredImage, 'altText', '');
  const sourceUrl = _get(featuredImage, 'sourceUrl', '');
  const imageFileName = sourceUrl.split('/').pop();
  const articleTitle = parseStringToHTML(title);

  return (
    <main id="primary" className="main-content-area single-post">
      <header className="primary-header">
        <Image publicId={imageFileName} alt={altText} className="primary-featured-image">
          <Transformation aspectRatio="2" crop="fill" effect="art:linen" />
        </Image>
        <h1 className="primary-header-title styled-title">{articleTitle}</h1>

        <div className="subline">
          <span className="byline-text">Written by Nicole Cao updated Feb 24, 2017</span>

          <div className="social-sharer">
            <SocialSharer articleURI={contentURI} articleTitle={articleTitle} articleFeaturedImg={sourceUrl} />
          </div>
        </div>
      </header>
      <div className="content-area">{parseStringToHTML(content)}</div>
    </main>
  );
};

export default PrimaryContentComponent;
