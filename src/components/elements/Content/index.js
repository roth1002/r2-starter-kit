import React, { memo } from 'react';
import PropTypes from 'prop-types';

import ProgressiveImage from 'components/elements/ProgressiveImage';

function Content ({
  authorName,
  authorEmail,
  title,
  description,
  image,
  placeholder,
}) {
  return (
    <div className="ts card text container">
      <div className="image">
        <ProgressiveImage
          url={image}
          placeholder={placeholder}
        />
      </div>
      <div className="content">
        <div className="header">{title}</div>
        <div className="bulleted meta">
          {`${authorName} (${authorEmail})`}
        </div>
        <div className="description">
          {description}
        </div>
      </div>
    </div>
  );
}

Content.propTypes = {
  authorName:  PropTypes.string,
  authorEmail: PropTypes.string,
  title:       PropTypes.string,
  description: PropTypes.string,
  image:       PropTypes.string,
  placeholder: PropTypes.string,
};

Content.defaultProps = {
  authorName:  '',
  authorEmail: '',
  title:       '',
  description: '',
  image:       '',
  placeholder: '',
};

export default memo(Content);
