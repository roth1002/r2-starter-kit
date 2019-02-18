import React from 'react';
import PropTypes from 'prop-types';

import Breadcrumb from 'components/elements/Breadcrumb';
import Content from 'components/elements/Content';

function Item ({
  breadcrumb,
  content,
}) {
  return (
    <div className="ts text container">
      <Breadcrumb {...breadcrumb} />
      <div className="ts divider" />
      <Content {...content} />
    </div>
  );
}

Item.propTypes = {
  breadcrumb: PropTypes.object,
  content:    PropTypes.object,
};

Item.defaultProps = {
  breadcrumb: {},
  content:    {},
};

export default Item;
