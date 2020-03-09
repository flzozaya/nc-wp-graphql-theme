import React, { useState } from 'react';
import { Link } from '@reach/router';
import MaterialIcon from 'react-material-iconic-font';

import Logo from '../assets/Logo';
import SubNav from './SubNavigationComponent';
import { getRelativeURLPath } from '../lib';
import './Navigation.scss';

const NavigationComponent = ({ mainNavItems, socialNavItems }) => {
  return (
    <header id="header">
      <div className="header-wrapper">
        <LogoComponent />
        <MainMenuNav mainNavItems={mainNavItems} />
        <div className="header__nav header__nav-social">
          <ul className="header__nav-list header__nav-list-social">
            {socialNavItems.map(({ label, url }, index) => (
              <li key={index} className="header__nav-list-item header__nav-list-item-social">
                <Link
                  to={getRelativeURLPath(url)}
                  className="header__nav-list-item-link header__nav-list-item-link-social"
                >
                  <MaterialIcon type={label.toLowerCase()} large />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <MobileNavigation mainNavItems={mainNavItems} />
    </header>
  );
};

function MainMenuNav({ mainNavItems, isMobile = false, onClick: hideMenuOnClick, ...rest }) {
  const [subNavVisible, showSubNav] = useState(false);

  const handleMouseOver = submenusArray => {
    if (submenusArray.length === 0) {
      showSubNav(false);
      return;
    }

    showSubNav(true);
  };

  return (
    <nav className="header__nav" {...rest}>
      <ul className="header__nav-list">
        {isMobile && (
          <li className="header__nav-list-item">
            <Link to="/" className="header__nav-list-item-link">
              Home
            </Link>
          </li>
        )}
        {mainNavItems.map(({ label, url, childItems }, index) => {
          const submenus = childItems.nodes;
          return (
            <li
              key={index}
              className="header__nav-list-item"
              onMouseOver={() => handleMouseOver(submenus)}
              onMouseLeave={() => showSubNav(false)}
            >
              {!!submenus.length ? (
                <span className="header__nav-list-item-link">
                  {label}
                  {isMobile && <MaterialIcon type="chevron-right" className="mobile-dropdown" />}
                </span>
              ) : (
                <Link to={getRelativeURLPath(url)} className="header__nav-list-item-link" onClick={hideMenuOnClick}>
                  {label}
                </Link>
              )}

              {!!submenus.length && subNavVisible && (
                <SubNav subMenuItems={submenus} hideMenuOnClick={hideMenuOnClick} />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function LogoComponent() {
  return (
    <div className="header__logo">
      <Link to="/">
        <Logo styles={{ verticalAlign: 'bottom' }} />
      </Link>
    </div>
  );
}

function MobileNavigation({ mainNavItems }) {
  const [isMenuNavVisible, handleHamburgerClick] = useState(false);

  return (
    <div className="mobile-nav-wrapper">
      <div className="mobile-nav">
        <LogoComponent />
        <a className="hamburger" onClick={() => handleHamburgerClick(!isMenuNavVisible)}>
          <MaterialIcon type="menu" />
        </a>
      </div>
      {isMenuNavVisible && (
        <div className="mobile-nav-menu">
          <MaterialIcon type="close" className="close-menu" onClick={() => handleHamburgerClick(!isMenuNavVisible)} />
          <MainMenuNav
            mainNavItems={mainNavItems}
            isMobile={true}
            onClick={() => handleHamburgerClick(!isMenuNavVisible)}
          />
        </div>
      )}
    </div>
  );
}

export default NavigationComponent;

// nc-wp-graphql-theme
// Custom, decoupled Wordpress Theme built in React. Using a GraphQL wrapper API around Wordpress's Rest API