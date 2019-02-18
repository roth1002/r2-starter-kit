import React from 'react';
import PropTypes from 'prop-types';

import ProgressiveImage from 'components/elements/ProgressiveImage';

function Items ({
  posts,
  handleClick,
}) {
  return (
    <div className="ts text container">
      <div className="ts divided items">
        {posts.map(({
          id,
          title,
          description,
          image,
          placeholder,
        }, key) => (
          <div
            key={`item${key}`}
            className="item"
            onClick={() => handleClick(id)}
          >
            <div className="image">
              <ProgressiveImage
                url={image}
                placeholder={placeholder}
              />
            </div>
            <div className="content">
              <div className="header">
                {title}
              </div>
              <div className="description">{description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Items.propTypes = {
  posts:       PropTypes.array,
  handleClick: PropTypes.func,
};

Items.defaultProps = {
  posts:       [],
  handleClick: () => {},
};

export default Items;
