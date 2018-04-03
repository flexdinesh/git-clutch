import React from 'react';
import Layout from 'components/Layout';

import './style.scss';

const Footer = () => (
  <footer>
    <Layout.ContentGrid>
      <section>Made with <span role="img" aria-label="heart-emoji">❤️</span> by <a href="https://twitter.com/flexdinesh">Dinesh</a></section>
    </Layout.ContentGrid>
  </footer>
);

export default Footer;
