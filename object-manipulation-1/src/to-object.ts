/* exported toObject */
function toObject(keyValuePair: [string, any]): Record<string, any> {
  return { [keyValuePair[0]]: keyValuePair[1] };
}
