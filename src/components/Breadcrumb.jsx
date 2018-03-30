import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Breadcrumb({ data }) {
  return (
    <div className="ts breadcrumb">
      {data.map((val, key) => {
        const lastOne = key === data.length - 1;
        return (
          <div
            key={`crumb${key}`}
            className={`${lastOne ? 'active' : ''} section`}
          >
            {val.link ? <Link to={val.link}>{val.text}</Link> : val.text}
            {!lastOne && <i className="right angle icon divider" />}
          </div>
        );
      })}
    </div>
  );
}

Breadcrumb.defaultProps = {
  data: [{ text: 'Post List', link: '/' }, { text: 'Content' }],
};

Breadcrumb.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
};

export default Breadcrumb;
