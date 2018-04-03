import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const ContentGrid = ({ className, children }) => (
  <div className={`content-grid ${className}`}>
    { children }
  </div>
);

ContentGrid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default ContentGrid;
