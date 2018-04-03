import React from 'react';

import './style.scss';

const Footer = () => (
  <div className="search-box">
    <input
      id="search-term"
      type="text"
      placeholder="Eg. Rebase a branch with master"
    />
  </div>
);

export default Footer;
