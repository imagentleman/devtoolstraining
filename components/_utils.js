export function padNumber(num, pad = "00") {
  const str = num.toString();
  return pad.substring(0, pad.length - str.length) + str;
}
