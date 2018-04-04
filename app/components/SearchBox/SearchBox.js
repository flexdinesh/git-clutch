import React from 'react';

import './style.scss';

const Footer = () => (
  <div className="search-box">
    <div className="search-box__container">
      <input
        id="search-term"
        type="text"
        placeholder="Eg. Rebase a branch with master"
      />
    </div>
  </div>
);

export default Footer;
