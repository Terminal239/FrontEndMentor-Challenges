import React from "react";

const PrimaryNavigation = () => {
  return (
    <nav className="navigation primary">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a className="navigation__link" href="#">
            Pricing
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="#">
            Product
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="#">
            About Us
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="#">
            Careers
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="#">
            Community
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default PrimaryNavigation;
