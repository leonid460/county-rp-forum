export function formatWord(total: number, textForms: string[]) {
  const num = Math.abs(total) % 100;
  const num1 = total % 10;

  if (num > 10 && num < 20) {
    return textForms[2];
  }

  if (num1 > 1 && num1 < 5) {
    return textForms[1];
  }

  if (num1 === 1) {
    return textForms[0];
  }

  return textForms[2];
}
