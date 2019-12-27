/**
 * TextSplit
 */
import React from 'react';
import PropTypes from 'prop-types'

const WHITESPACE_ONLY_REGEX = /^\s*$/;


const TextSplit = (props) => {
  const {
    text,
    classBase,
  } = props

/**
* splitText
* Override this function for different styles
* @return {array[string]} array of split text value
*/
  let splitText = () => {
    return [text];
  }

/**
* renderPart
* @param {string} text
* @param {number} index
*/
  const renderPart = (text, index) => {
    var partNumber = `part-${index}`;
    var classString = `${partNumber} ${classBase}-part`;

    if (WHITESPACE_ONLY_REGEX.test(text)) {
      classString += ` whitespace ${classBase}-whitespace`;
    }

    // replace spaces
    text = text.replace(/ /g, '\u00A0');

    return <span aria-hidden className={classString} key={index}>{text}</span>;
  }

  return (
    <span aria-label={text} className={classBase + '-base'}>
      { splitText().map((text, i) => renderPart(text, i))}
    </span>
  )
}

TextSplit.propTypes = {
  text: PropTypes.string,
  classBase: PropTypes.string,
  children: PropTypes.string
};

TextSplit.defaultProps = {
  classBase: 'text-split',
  text: '',
  children: '',
};

export default TextSplit;
