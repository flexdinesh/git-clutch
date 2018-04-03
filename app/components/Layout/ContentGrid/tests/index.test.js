import React from 'react';
import { shallow } from 'enzyme';

import ContentGrid from '../index';

describe('<ContentGrid />', () => {
  it('should render', () => {
    const wrapper = shallow(<ContentGrid />);
    expect(wrapper.length).toEqual(1);
  });
});
