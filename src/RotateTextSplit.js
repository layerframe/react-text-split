/**
 * RotateTextSplit
 */
import React, { useEffect, useState } from 'react';
import TextSplit from './TextSplit';
import PropTypes from 'prop-types'

const RotateTextSplit = (props) => {
  const {
    type: Type,
    values,
    classBase,
    interval,
    children,
  } = props
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const _timer = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % values.length);
    }, interval);

    return () => clearInterval(_timer)
  })

  return (
    <Type
      classBase={classBase}
    >
      {values[index] || children}
    </Type>
  );
}

RotateTextSplit.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  type: PropTypes.instanceOf(TextSplit).isRequired,
  interval: PropTypes.number,
  classBase: PropTypes.string,
  children: PropTypes.string,
};

RotateTextSplit.defaultProps = {
  interval: 2000,
  classBase: 'text-split',
  children: '',
};

export default RotateTextSplit;
