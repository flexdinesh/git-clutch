/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/Layout';
import SearchBox from 'components/SearchBox';

import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    return (
      <div className="home-page">
        <Layout.ContentGrid>
          <section className="centered">
            {/* <input
              id="search-term"
              type="text"
              placeholder="stash a file"
              value={this.props.username}
              onChange={this.props.onChangeUsername}
            /> */}
            <SearchBox />
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
