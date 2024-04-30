export default function cleanSet(set, startString) {
  if (!set || !(set instanceof Set) || !startString || typeof startString !== 'string') {
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
