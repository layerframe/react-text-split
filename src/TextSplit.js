/**
 * TextSplit
 */
import React from 'react';
import PropTypes from 'prop-types'
import split from 'lodash.split'

const WHITESPACE_ONLY_REGEX = /^\s*$/;

const TextSplit = (props) => {
  const {
    string,
    children,
    separator
  } = props

  // String.prototype.split splits text by UTF-16 codeunit, which breaks
  // surrogate pairs, and can lead to unexpected results.
  // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split#Syntax
  let substrings = split(string, separator)

  return children(
    substrings.map((substring, index) => ({
      substring,
      key: `${substring}-${index}`
    }))
  );
}

TextSplit.propTypes = {
  string: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
  separator: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(RegExp)
  ])
};

TextSplit.defaultProps = {
  separator: '',
};

export default TextSplit;
