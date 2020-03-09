import React from 'react';
import FeaturedPostCard from '../FeaturedPostCard';
import { parseStringToHTML } from '../../lib';
import _get from 'lodash/get';
import _reverse from 'lodash/reverse';

import './index.scss';

const FeaturePostsList = props => {
  const categories = _reverse(_get(props.data, 'categories.nodes', []));

  return (
    <section>
      {categories.map(({ name, posts }, i) => {
        const postsArray = posts.nodes;
        return (
          <div key={i} className='featured-post-section'>
            <h2 className="decorated-title styled-title">{parseStringToHTML(name)}</h2>
            <ul className="featured-post-list">
              {postsArray.map(({ title, date, uri, termNames, featuredImage }, index) => {
                const subcategories = termNames.filter(subcatName => subcatName !== name).join(', ');

                return (
                  <li key={index} className="featured-post-list__item">
                    <FeaturedPostCard
                      title={title}
                      date={date}
                      uri={uri}
                      subcategories={subcategories}
                      featuredImage={featuredImage}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export default FeaturePostsList;
