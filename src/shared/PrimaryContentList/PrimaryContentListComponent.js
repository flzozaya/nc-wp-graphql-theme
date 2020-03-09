import React from 'react';
import { Image, Transformation } from 'cloudinary-react';
import { parseStringToHTML, getLastPathItem } from '../../lib';
import FeaturedPostCard from '../FeaturedPostCard';

import _get from 'lodash/get';
import './index.scss';

const PrimaryContentListComponent = ({ postCount, category, postsList }) => {
  return (
    <main id="primary" className="main-content-area content-list">
      <header className="primary-header">
        <h1 className="primary-header-title styled-title">{parseStringToHTML(category)}</h1>
        {postCount && <div className="post-count"> {postCount} posts</div>}
      </header>
      <div className="content-area">
        <div className="post-list">
          {postsList.map(({ title, date, uri, termNames, featuredImage }, index) => {
            const subcategories = termNames.filter(subcatName => subcatName !== category).join(', ');

            return index === 0 ? (
              <article className="top-post" key={index}>
                <FeaturedPostCard
                  title={title}
                  date={date}
                  uri={getLastPathItem(uri)}
                  subcategories={subcategories}
                  featuredImage={featuredImage}
                  isPrimaryTop={true}
                />
              </article>
            ) : (
              <article className="post-box-item" key={index}>
                <FeaturedPostCard
                  title={title}
                  date={date}
                  uri={getLastPathItem(uri)}
                  subcategories={subcategories}
                  featuredImage={featuredImage}
                />
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default PrimaryContentListComponent;
