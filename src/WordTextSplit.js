/**
 * WordTextSplit
 */
import TextSplit from './TextSplit';

const WHITESPACE_SPLIT_REGEX = /(\s+)/;

class WordTextSplit extends TextSplit {
  splitText() {
    return this.props.text.split(WHITESPACE_SPLIT_REGEX).filter((n) => n !== '');
  }
}

export default WordTextSplit;
