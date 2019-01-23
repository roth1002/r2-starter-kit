import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import Loading from 'components/elements/Loading';

class Posts extends PureComponent {
  static propTypes = {
    uiState: PropTypes.oneOf(['loading', 'idle', 'failure']),
    Items: PropTypes.element,
  };
  static defaultProps = {
    uiState: 'idle',
    Items: null,
  };
  render() {
    const { uiState, Items } = this.props;
    return (
      <Fragment>
        {uiState === 'loading' && <Loading />}
        {uiState === 'idle' && Items}
      </Fragment>
    );
  }
}

export default Posts;
