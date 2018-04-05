import React from 'react';
import PropTypes from 'prop-types';
import Remarkable from 'remarkable';
import t from 'typy';

import './style.scss';

const md = new Remarkable({
  html: true,
  breaks: true
});

const getParsedMD = (decodedMd) => {
  const renderedMD = md.render(decodedMd);
  return <div dangerouslySetInnerHTML={{ __html: renderedMD }} />;
};

const MarkdownViewer = (props) => {
  const { mdInput } = props;

  let render;

  if (t(mdInput).isString) {
    const decodedMd = atob(mdInput);
    render = getParsedMD(decodedMd);
  } else {
    render = null;
  }
  return (
    <div className="markdown-viewer">
      { render }
    </div>
  );
};

MarkdownViewer.propTypes = {
  mdInput: PropTypes.string
};

export default MarkdownViewer;
