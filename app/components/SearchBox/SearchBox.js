/* eslint-disable react/prefer-stateless-function, no-unused-vars */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fuse from 'fuse.js';
import t from 'typy';
import { focus, blur } from 'utils/dom';
import { getPlainTextFromMD } from 'utils/markdown';

import './style.scss';

const searchOptions = {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: ['header']
};

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.searchInput = React.createRef();
    this.fuse = new Fuse(props.topics, searchOptions);
    this.suggestionDOMNodes = [];

    this.state = {
      suggestions: []
    };
  }

  keyDownOnSearchInput(e) {
    if (e.keyCode === 40) {
      const { suggestionDOMNodes } = this;
      if (suggestionDOMNodes.length) {
        focus(suggestionDOMNodes[0]);
      }
    }
  }

  keyDownOnSuggestion(e, currentIndex) {
    if (e.keyCode === 40) {
      const { suggestionDOMNodes } = this;
      if (currentIndex + 1 < suggestionDOMNodes.length) {
        blur(suggestionDOMNodes[currentIndex]);
        focus(suggestionDOMNodes[currentIndex + 1]);
      }
    } else if (e.keyCode === 38) {
      const { suggestionDOMNodes } = this;
      if (currentIndex - 1 >= 0) {
        blur(suggestionDOMNodes[currentIndex]);
        focus(suggestionDOMNodes[currentIndex - 1]);
      }
    } else if (e.keyCode === 13) {
      this.selectTopic(e);
    }
  }

  updateSuggestions(e) {
    const searchTerm = t(e, 'target.value').safeString;
    const suggestions = this.fuse.search(searchTerm);

    this.setState({
      suggestions
    });
  }

  selectTopic(e) {
    const selectedTopic = t(e, 'target.textContent').safeString;
    this.setState({
      suggestions: []
    });

    this.searchInput.current.value = selectedTopic;
  }

  render() {
    const { topics } = this.props;

    const { suggestions } = this.state;

    return (
      <div className="search-box">
        <div className="input-wrapper">
          <input
            id="search-input"
            type="text"
            placeholder="Eg. Rebase a branch with master"
            ref={this.searchInput}
            onChange={(e) => this.updateSuggestions(e)}
            onKeyDown={(e) => this.keyDownOnSearchInput(e)}
          />
          <div className="search-icon">
            <i className="fas fa-search" />
          </div>
        </div>
        <div className="autocomplete-dropdown">
          {suggestions.map((item, i) => (
            <div
              className="suggestion"
              key={item.header}
              onClick={(e) => this.selectTopic(e)}
              onKeyDown={(e) => this.keyDownOnSuggestion(e, i)}
              role="searchbox"
              tabIndex={0}
              ref={(elem) => {
                this.suggestionDOMNodes[i] = elem;
              }}
            >
              {getPlainTextFromMD(item.header)}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

SearchBox.propTypes = {
  topics: PropTypes.array
};

export default SearchBox;
