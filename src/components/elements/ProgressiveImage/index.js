import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './styles.scss';

function ProgressiveImage ({
  url,
  placeholder,
}) {
  const [currentUrl, setCurrentUrl] = useState(placeholder);
  const [isSharp, setIsSharp] = useState(false);

  return (
    <div>
      <img
        className={cx(styles['placeholder'], {
          [styles['sharp']]: isSharp,
        })}
        style={{ backgroundImage: `url('${currentUrl}')` }}
      />
      <img
        src={url}
        onLoad={() => {
          setCurrentUrl(url);
          setIsSharp(true);
        }}
        style={{ display: 'none' }}
      />
    </div>
  );
}

ProgressiveImage.propTypes = {
  url:         PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

ProgressiveImage.defaultProps = {
  url:         '',
  placeholder: '',
};

export default ProgressiveImage;
