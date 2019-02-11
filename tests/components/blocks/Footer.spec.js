import React from 'react';
import { shallow } from 'enzyme';
import Component from 'components/blocks/Footer';

describe('<Footer />', () => {
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
