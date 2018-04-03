import React from 'react';
import { shallow } from 'enzyme';

import SearchBox from '../index';

describe('<SearchBox />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(<SearchBox />);
    expect(renderedComponent.length).toEqual(1);
  });
});
