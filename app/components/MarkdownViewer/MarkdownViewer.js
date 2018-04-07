import React from 'react';
import PropTypes from 'prop-types';
import { getHTMLFromMD } from 'utils/markdown';

import './style.scss';

const MarkdownViewer = (props) => {
  const { mdInput } = props;
  const parsedMD = getHTMLFromMD(mdInput);

  return (
    <div className="markdown-viewer">
      <div dangerouslySetInnerHTML={{ __html: parsedMD }} />
    </div>
  );
};

MarkdownViewer.propTypes = {
  mdInput: PropTypes.string
};

export default MarkdownViewer;
