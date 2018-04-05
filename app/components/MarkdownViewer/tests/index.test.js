import React from 'react';
import { shallow } from 'enzyme';

import MarkdownViewer from '../index';

describe('<MarkdownViewer />', () => {
  it('should render', () => {
    const renderedComponent = shallow(<MarkdownViewer />);
    expect(renderedComponent.length).toEqual(1);
  });

  it('should render Markdown', () => {
    const md = '# MD works!';
    const encodedMD = btoa(md);
    const renderedComponent = shallow(<MarkdownViewer mdInput={encodedMD} />);
    const expectedElem = '<h1>MD works!</h1>';
    expect(renderedComponent.html()).toContain(expectedElem);
  });
});
