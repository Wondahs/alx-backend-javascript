export default function cleanSet(set, startString) {
  const allStrings = Array.from(set).every((element) => typeof element === 'string');

  if (!set || !(set instanceof Set) || !allStrings || !startString || typeof startString !== 'string') {
    return '';
  }
  const finalString = [];
  set.forEach((element) => {
    if (startString !== '' && element.startsWith(startString)) {
      const subString = element.replace(startString, '');
      finalString.push(subString);
    }
  });
  return finalString.join('-');
}
