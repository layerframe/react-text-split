/**
 * WordTextSplit
 */
import React from 'react';
import TextSplit from './TextSplit';
import PropTypes from 'prop-types'

const WORD_SEPARATOR = /\s+/;

const WordTextSplit = (props) => {
  const { as, children } = props
  return React.createElement(
    TextSplit,
    { string: children, separator: WORD_SEPARATOR },
    substrings =>
      substrings.map(({ substring, key }, index) =>
        React.createElement(
          as,
          { ...props, key },
          index < substrings.length - 1 ? `${substring} ` : substring
        )
      )
  );
}

WordTextSplit.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  children: PropTypes.string.isRequired
};

WordTextSplit.defaultProps = {
  as: 'span',
};

export default WordTextSplit;
