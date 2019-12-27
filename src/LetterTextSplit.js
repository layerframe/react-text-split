/**
 * LetterTextSplit
 */
import TextSplit from './TextSplit';

class LetterTextSplit extends TextSplit {
  splitText() {
    return this.props.text.split('');
  }
}

export default LetterTextSplit;
