import React from 'react';

import './style.scss';

const Footer = () => (
  <div className="search-box">
    <div className="input-wrapper">
      <input
        id="search-term"
        type="text"
        placeholder="Eg. Rebase a branch with master"
      />
      <div className="search-icon">
        <i className="fas fa-search"></i>
      </div>
    </div>
    <div className="autocomplete-dropdown">
      <div className="suggestion">Hello World</div>
      <div className="suggestion">Bonjour</div>
    </div>
  </div>
);

export default Footer;
