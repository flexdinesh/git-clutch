import React from 'react';
import Layout from 'components/Layout';

import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <Layout.ContentGrid>
          <div className="title-wrapper">
            <h1>Git Clutch</h1>
          </div>
        </Layout.ContentGrid>
      </div>
    );
  }
}

export default Header;
