import { formatWord } from '@/utils/formatWord';
import { truncNumeral } from '@/utils/truncNumeral';

export function formatNumeralAndWordTuple(numeral: number, wordForms: string[]) {
  const truncatedNumeral = truncNumeral(numeral);
  let numeralForFormatting;
  const postfixOfTruncated = truncatedNumeral[truncatedNumeral.length - 1].toLowerCase();

  if (postfixOfTruncated === 'k') {
    numeralForFormatting = 1000;
  } else if (postfixOfTruncated === 'm') {
    numeralForFormatting = 1000000;
  } else {
    numeralForFormatting = numeral;
  }

  return `${truncatedNumeral} ${formatWord(numeralForFormatting, wordForms)}`;
}
