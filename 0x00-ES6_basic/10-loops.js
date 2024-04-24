export default function appendToEachArrayValue(array, appendString) {
  for (let idx = 0 of array) {
    let value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
