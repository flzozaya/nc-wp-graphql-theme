import React from 'react';
import { Link } from '@reach/router';
import { getRelativeURLPath } from '../lib';

const SubNavigationComponent = ({ subMenuItems, hideMenuOnClick }) => {
  return (
    <ul className="header__nav-subnav-list">
      {subMenuItems.map(({ label, url }, index) => {
        return (
          <li key={index} className="header__nav-subnav-list-item" onClick={hideMenuOnClick}>
            <Link to={getRelativeURLPath(url)} className="header__nav-subnav-list-item-link">
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SubNavigationComponent;
