/**
 * LetterTextSplit
 */
import TextSplit from './TextSplit';
import PropTypes from 'prop-types'

class LetterTextSplit extends TextSplit {
  splitText() {
    return this.props.text.split('');
  }
}

LetterTextSplit.propTypes = {
  text: PropTypes.string.isRequired,
}

export default LetterTextSplit;
