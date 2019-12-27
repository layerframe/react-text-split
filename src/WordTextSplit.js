/**
 * WordTextSplit
 */
import TextSplit from './TextSplit';
import PropTypes from 'prop-types'

const WHITESPACE_SPLIT_REGEX = /(\s+)/;

class WordTextSplit extends TextSplit {
  splitText() {
    return this.props.text.split(WHITESPACE_SPLIT_REGEX).filter((n) => n !== '');
  }
}

WordTextSplit.propTypes = {
  text: PropTypes.string.isRequired,
}

export default WordTextSplit;
