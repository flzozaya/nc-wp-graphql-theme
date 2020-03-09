import React from 'react';
// import InstagramEmbed from 'react-instagram-embed';
import './index.scss';

const SideBarComponent = ({ tags }) => {
  return (
    <aside id="secondary" className="sidebar-area">
      <div className="sidebar-section">
        <h4 className="sidebar-item-title">INSTAGRAM</h4>
        <img
          src="https://res.cloudinary.com/n1cnac/image/upload/v1583429276/Instagram-Tiles-Sample-2_faefyi.png"
          width="100%"
          alt=""
        />
      </div>
      <div className="sidebar-section">
        <h4 className="sidebar-item-title">TAGS</h4>
        <div className="tags-container">
          {tags.map(({ name, link, uri, slug }, index) => (
            <span className="tag-item" key={index}>
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* <InstagramEmbed
        url="https://www.instagram.com/p/BudeAMoglqR/"
        maxWidth={320}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      /> */}
    </aside>
  );
};

export default SideBarComponent;
