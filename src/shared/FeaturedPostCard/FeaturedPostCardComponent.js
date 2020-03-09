import React from 'react';
import { parseStringToHTML, getLastPathItem } from '../../lib';
import { Link } from '@reach/router';
import { Image, Transformation } from 'cloudinary-react';
import SocialSharer from '../SocialSharer';
import moment from 'moment';
import _get from 'lodash/get';

import './index.scss';

const FeaturedPostCardComponent = ({ isPrimaryTop = false, subcategories, title, date, uri, featuredImage }) => {
  const altText = _get(featuredImage, 'altText', '');
  const sourceUrl = _get(featuredImage, 'sourceUrl', '');
  const postDate = moment(date).fromNow();
  const articleTitle = parseStringToHTML(title);

  return !isPrimaryTop ? (
    <div className="featured-post-card">
      <Link to={uri} className="featured-post-card__image-wrapper">
        <div className="image-inset-border"></div>
        <Image className="featured-post-card__image" publicId={getLastPathItem(sourceUrl)} alt={altText} width="100%">
          <Transformation width="383" height="255" crop="fill" effect="art:linen" />
        </Image>
      </Link>
      <div className="featured-post-card__details">
        <span className="featured-post-card__subcategory">
          {!!subcategories ? (
            <>
              {parseStringToHTML(subcategories)}
              <span className="subcategory-separator"></span>
              <time>{postDate}</time>
            </>
          ) : (
            <time>{postDate}</time>
          )}
        </span>
        <h3 className="featured-post-card__title">{articleTitle}</h3>
        <SocialSharer articleURI={uri} articleTitle={articleTitle} articleFeaturedImg={sourceUrl} />
      </div>
    </div>
  ) : (
    <div className="primary-featured-post">
      <header className="primary-featured-post__header">
        {subcategories && (
          <span className="primary-featured-post__subcategory">{parseStringToHTML(subcategories)}</span>
        )}
        <Link to={uri} className="primary-featured-post__title-wrapper">
          <h2 className="primary-featured-post__title">{parseStringToHTML(title)}</h2>
        </Link>

        <time>{postDate}</time>
      </header>

      <Link to={uri} className="primary-featured-post__image-wrapper">
        <Image publicId={getLastPathItem(sourceUrl)} alt={altText} className="primary-featured-image">
          <Transformation aspectRatio="2" crop="fill" effect="art:linen" />
        </Image>
      </Link>

      <div className="primary-featured-post__social">
        <SocialSharer articleURI={uri} articleTitle={articleTitle} articleFeaturedImg={sourceUrl} />
      </div>
    </div>
  );
};

export default FeaturedPostCardComponent;
