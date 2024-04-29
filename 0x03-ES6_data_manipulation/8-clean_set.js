export default function cleanSet(set, startString) {
  let finalString = [];
  set.forEach((element) => {
    if (startString !== '' && element.startsWith(startString)) {
      const subString = element.replace(startString, '');
      finalString.push(subString);
    }
  });
  return finalString.join('-')
}
