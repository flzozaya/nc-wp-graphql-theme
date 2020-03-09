import React from 'react';
import MaterialIcon, { MaterialIconStack, MaterialIconList } from 'react-material-iconic-font';
import Logo from '../assets/Logo';

import './index.scss';

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer__container container-width">
        <div className="footer__newsletter-signup">
          <h3>Get the low-down.</h3>
          <p>Sign up with your email address to receive news and updates.</p>

          <div className="signup">
            <input type="Enter Email address" className="singup-email-input" />
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </div>
        </div>
        <div className="footer__menu">
          <ul className="nav-items">
            <li className="item">Travels</li>
            <li className="item">Eats</li>
            <li className="item">About</li>
            <li className="item">Contact</li>
            <li className="item">Privacy Policy</li>
            <li className="item">Terms of Use</li>
            <li className="item">Advertise</li>
            <li className="item">Cookie Policy</li>
          </ul>

          <MaterialIconStack className="social-media-icons" large>
            <MaterialIcon type="facebook" />
            <MaterialIcon type="instagram" />
            <MaterialIcon type="pinterest" />
            <MaterialIcon type="twitter" />
          </MaterialIconStack>

          <div className="logo-copyright">
            <Logo />
            <br />
            Lifestyle Blog & Magazine - &copy; Copyright 2020. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
