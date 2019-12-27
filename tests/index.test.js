import * as index from "../index";
import TextSplit from "../src/TextSplit";
import LetterTextSplit from "../src/LetterTextSplit";
import WordTextSplit from "../src/WordTextSplit";

test("exports Split", async () => {
  expect(index.TextSplit).toBe(TextSplit);
});

test("exports SplitCharacters", async () => {
  expect(index.LetterTextSplit).toBe(LetterTextSplit);
});

test("exports SplitWords", async () => {
  expect(index.WordTextSplit).toBe(WordTextSplit);
});
