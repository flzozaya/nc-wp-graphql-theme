import React from 'react';
import MaterialIcon from 'react-material-iconic-font';
import { useLocation } from '@reach/router';

import './index.scss';

const SocialSharerComponent = ({ articleURI: uri, articleTitle, articleFeaturedImg }) => {
  const location = useLocation();
  const cleanUri = uri.replace(/\/$/, '');
  const cleanLocationHref = location.href.replace(/\/$/, '');
  const articleURL = cleanLocationHref.includes(cleanUri) ? cleanLocationHref : `${cleanLocationHref}/${cleanUri}`;

  const FBurlRoot = 'https://www.facebook.com/sharer.php?u=';
  const PINurlRoot = `https://pinterest.com/pin/create/bookmarklet/?media=${articleFeaturedImg}&url=`;
  const TWurlRoot = `https://twitter.com/share?&text=${articleTitle}&via=n1c_nac&url=`;

  return (
    <div className="sharer">
      <span className="share-text">SHARE &rarr; </span>
      <a
        className="social-share-icon"
        href={`${FBurlRoot}${articleURL}`}
        target="_blank"
        rel="noopener"
        rel="noreferrer"
      >
        <MaterialIcon type="facebook" />
      </a>
      <a
        className="social-share-icon"
        href={`${PINurlRoot}${articleURL}`}
        target="_blank"
        rel="noopener"
        rel="noreferrer"
      >
        <MaterialIcon type="pinterest" />
      </a>
      <a
        className="social-share-icon"
        href={`${TWurlRoot}${articleURL}`}
        target="_blank"
        rel="noopener"
        rel="noreferrer"
      >
        <MaterialIcon type="twitter" />
      </a>
    </div>
  );
};

export default SocialSharerComponent;
