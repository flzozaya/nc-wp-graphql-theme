import React from 'react';
import FeaturePostsList from '../shared/FeaturePostsList';
import { Image, Transformation } from 'cloudinary-react';
import { parseStringToHTML } from '../lib';

import _get from 'lodash/get';

import './index.scss';

const HomeComponent = ({ featuredImage, content }) => {
  const altText = _get(featuredImage, 'altText', '');
  const sourceUrl = _get(featuredImage, 'sourceUrl', '');
  const imageFileName = sourceUrl.split('/').pop();

  return (
    <main id="home-page" className="with-main-margin-top">
      <Image className="home-page__hero-image" publicId={imageFileName} alt={altText}>
        <Transformation height="380" width="1080" crop="fill" effect="art:linen" />
      </Image>

      <div className="home-page__hero-content">{parseStringToHTML(content)}</div>
      <div className="container-width">
        <FeaturePostsList />
      </div>
    </main>
  );
};

export default HomeComponent;
