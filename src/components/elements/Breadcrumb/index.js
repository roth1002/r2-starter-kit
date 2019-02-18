import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

function Breadcrumb ({
  data,
  activeId,
}) {
  return (
    <div className="ts breadcrumb">
      {data.map((val, key) => {
        const isActive = val.id === activeId;
        return (
          <div
            key={`breadcrumb${key}`}
            className={cx('section', {
              'active': isActive,
            })}
          >
            {key > 0 &&
              <i className="right angle icon divider" />
            }
            {isActive && val.text}
            {!isActive &&
              <a onClick={val.handleClick}>
                {val.text}
              </a>
            }
          </div>
        );
      })}
    </div>
  )
}

Breadcrumb.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id:          PropTypes.number,
    text:        PropTypes.string,
    handleClick: PropTypes.func,
  })),
  activeId: PropTypes.number,
};

Breadcrumb.defaultProps = {
  data:     [],
  activeId: null,
};

export default Breadcrumb;
