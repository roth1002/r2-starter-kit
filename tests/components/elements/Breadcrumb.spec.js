import React from 'react';
import { shallow } from 'enzyme';
import Component from 'components/elements/Breadcrumb';

describe('<Breadcrumb />', () => {
  const initProps = {
    data: [],
    activeId: null,
  };

  const props = {
    data: [
      { id: -1, text: 'Home', handleClick: jest.fn() },
      { id: 1, text: 'title', handleClick: () => {} },
    ],
    activeId: 1,
  };

  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Component {...initProps} />);
  });

  it('should render initial component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with props', () => {
    wrapper.setProps(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleClick when click root path', () => {
    expect(props.data[0].handleClick).toHaveBeenCalledTimes(0);
    wrapper.find('a').simulate('click');
    expect(props.data[0].handleClick).toHaveBeenCalledTimes(1);
  });
});
