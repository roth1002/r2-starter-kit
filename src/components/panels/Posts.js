import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Loading from 'components/elements/Loading';

function Posts ({
  uiState,
  Items,
}) {
  return (
    <Fragment>
      {uiState === 'loading' && <Loading />}
      {uiState === 'idle' && Items}
      {uiState === 'failure' && 'Something went wrong.'}
    </Fragment>
  );
}

Posts.propTypes = {
  uiState: PropTypes.oneOf(['loading', 'idle', 'failure']),
  Items:   PropTypes.element,
};

Posts.defaultProps = {
  uiState: 'idle',
  Items:   null,
};

export default Posts;
