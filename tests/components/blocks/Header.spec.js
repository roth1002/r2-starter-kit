import React from 'react';
import { shallow } from 'enzyme';
import Component from 'components/blocks/Header';

describe('<Header />', () => {
  const initProps = {
  };

  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Component {...initProps} />);
  });

  it('should render initial component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
