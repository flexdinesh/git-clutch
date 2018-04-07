import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import SearchBox from '../index';
import * as domUtils from '../../../utils/dom';

describe('<SearchBox />', () => {
  let props;
  let focus;
  let blur;

  beforeEach(() => {
    props = {
      topics: [{ header: 'Jack Daniels' }, { header: 'John Doe' }]
    };
    focus = sinon.stub(domUtils, 'focus').callsFake(() => {});
    blur = sinon.stub(domUtils, 'blur').callsFake(() => {});
  });

  it('should render', () => {
    const renderedComponent = shallow(<SearchBox />);
    expect(renderedComponent.length).toEqual(1);
  });

  it('should render suggestions when user enters search term', () => {
    const renderedComponent = shallow(<SearchBox {...props} />);
    renderedComponent.find('#search-input').simulate('change', { target: { value: 'jack' } });
    expect(renderedComponent.find('.autocomplete-dropdown .suggestion').length).toEqual(1);
    expect(renderedComponent.find('.autocomplete-dropdown .suggestion').at(0).text()).toEqual('Jack Daniels');
  });

  it('should not render suggestions when topics are empty', () => {
    const renderedComponent = shallow(<SearchBox topics={[]} />);
    renderedComponent.find('#search-input').simulate('change', { target: { value: 'jaj' } });
    expect(renderedComponent.find('.autocomplete-dropdown .suggestion').length).toEqual(0);
  });

  it('should select suggestion and populate search box', () => {
    const renderedComponent = mount(<SearchBox {...props} />);
    renderedComponent.find('#search-input').simulate('change', { target: { value: 'jac' } });
    renderedComponent.find('.autocomplete-dropdown .suggestion').at(0).simulate('click', { target: { textContent: 'Jack Daniels' } });
    expect(renderedComponent.instance().searchInput.current.value).toEqual('Jack Daniels');
  });

  it('should focus on first suggestion when down arrow is pressed on search box', () => {
    const renderedComponent = mount(<SearchBox {...props} />);
    renderedComponent.find('#search-input').simulate('change', { target: { value: 'j' } });
    renderedComponent.find('#search-input').simulate('keyDown', { keyCode: 40 });
    expect(focus.calledOnce).toBeTruthy();
  });

  it('should focus on next suggestion when down arrow is pressed on a suggestion', () => {
    const renderedComponent = mount(<SearchBox {...props} />);
    renderedComponent.find('#search-input').simulate('change', { target: { value: 'j' } });
    renderedComponent.find('.autocomplete-dropdown .suggestion').at(0).simulate('keyDown', { keyCode: 40 });
    expect(focus.getCall(0).args[0]).toEqual(renderedComponent.instance().suggestionDOMNodes[1]);
  });

  it('should focus on previous suggestion when up arrow is pressed on a suggestion', () => {
    const renderedComponent = mount(<SearchBox {...props} />);
    renderedComponent.find('#search-input').simulate('change', { target: { value: 'j' } });
    renderedComponent.find('.autocomplete-dropdown .suggestion').at(0).simulate('keyDown', { keyCode: 40 });
    renderedComponent.find('.autocomplete-dropdown .suggestion').at(1).simulate('keyDown', { keyCode: 38 });
    expect(focus.getCall(1).args[0]).toEqual(renderedComponent.instance().suggestionDOMNodes[0]);
  });

  it('should select the topic when enter key is pressed on a suggestion', () => {
    const renderedComponent = mount(<SearchBox {...props} />);
    renderedComponent.find('#search-input').simulate('change', { target: { value: 'j' } });
    renderedComponent.find('.autocomplete-dropdown .suggestion').at(0).simulate('keyDown', { keyCode: 13 });
    expect(renderedComponent.instance().searchInput.current.value).toEqual('Jack Daniels');
  });

  afterEach(() => {
    focus.restore();
    blur.restore();
  });
});
