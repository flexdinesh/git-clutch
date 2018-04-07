/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/Layout';
import SearchBox from 'components/SearchBox';
import MarkdownViewer from 'components/MarkdownViewer';
import { preventPageScroll } from 'utils/dom';
import topics, { whatDidICommit } from './search-list';

import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
    window.addEventListener('keydown', (e) => preventPageScroll(e), false);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', (e) => preventPageScroll(e), false);
  }

  render() {
    const decodedMd = atob(whatDidICommit);
    return (
      <div className="home-page">
        <Layout.ContentGrid>
          <section className="search-wrapper">
            <SearchBox topics={topics} />
          </section>
          <section className="markdown-wrapper">
            <MarkdownViewer mdInput={decodedMd} />
          </section>
        </Layout.ContentGrid>
      </div>
    );
  }
}

HomePage.propTypes = {
  onSubmitForm: PropTypes.func,
  username: PropTypes.string
};
