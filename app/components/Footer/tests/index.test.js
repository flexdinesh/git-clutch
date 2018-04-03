import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../index';

describe('<Footer />', () => {
  it('should render', () => {
    const renderedComponent = shallow(<Footer />);
    expect(renderedComponent.length).toEqual(1);
  });

  it('should render the credits', () => {
    const renderedComponent = shallow(<Footer />);
    expect(renderedComponent.html()).toContain('Dinesh');
  });
});
