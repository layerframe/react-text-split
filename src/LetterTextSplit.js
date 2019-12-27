/**
 * LetterTextSplit
 */
import React from 'react'
import PropTypes from 'prop-types'
import TextSplit from './TextSplit'


const LetterTextSplit = (props) => {
  const { as, children } = props
  return React.createElement(TextSplit, { string: children }, substrings =>
    substrings.map(({ substring, key }) =>
      React.createElement(as, { ...props, key }, substring)
    )
  );
}


LetterTextSplit.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  children: PropTypes.string.isRequired
};

LetterTextSplit.defaultProps = {
  as: 'span',
};

export default LetterTextSplit;
