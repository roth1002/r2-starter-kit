import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Loading from 'components/elements/Loading';

function Post ({
  uiState,
  Item,
}) {
  return (
    <Fragment>
      {uiState === 'loading' && <Loading />}
      {uiState === 'idle' && Item}
      {uiState === 'failure' && 'Something went wrong.'}
    </Fragment>
  );
}

Post.propTypes = {
  uiState: PropTypes.oneOf(['loading', 'idle', 'failure']),
  Item:    PropTypes.element,
};

Post.defaultProps = {
  uiState: 'idle',
  Item:    null,
};

export default Post;
