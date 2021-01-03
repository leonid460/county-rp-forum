function decimalAdjust(type: 'round' | 'floor' | 'ceil', value: number, exp: number) {
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math[type](value);
  }

  value = +value;
  exp = +exp;

  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN;
  }

  let strValue = value.toString().split('e');
  value = Math[type](+(strValue[0] + 'e' + (strValue[1] ? +strValue[1] - exp : -exp)));

  strValue = value.toString().split('e');
  return +(strValue[0] + 'e' + (strValue[1] ? +strValue[1] + exp : exp));
}

export function round10(value, exp) {
  return decimalAdjust('round', value, exp);
}
