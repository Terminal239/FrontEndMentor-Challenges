import React from "react";

const FooterNavigation = () => {
  return (
    <nav className="footer__navigation">
      <ul className="footer__navigation-list">
        <li className="footer__navigation-item">
          <a className="footer__navigation-link" href="">
            Home
          </a>
        </li>
        <li className="footer__navigation-item">
          <a className="footer__navigation-link" href="">
            Pricing
          </a>
        </li>
        <li className="footer__navigation-item">
          <a className="footer__navigation-link" href="">
            Products
          </a>
        </li>
        <li className="footer__navigation-item">
          <a className="footer__navigation-link" href="">
            About Us
          </a>
        </li>
      </ul>
      <ul className="footer__navigation-list">
        <li className="footer__navigation-item">
          <a className="footer__navigation-link" href="">
            Careers
          </a>
        </li>
        <li className="footer__navigation-item">
          <a className="footer__navigation-link" href="">
            Community
          </a>
        </li>
        <li className="footer__navigation-item">
          <a className="footer__navigation-link" href="">
            Privacy Policy
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNavigation;
