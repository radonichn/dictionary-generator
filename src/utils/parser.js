export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const parseText = (text, minLength = 5, count = 100) => {
  const words = text.replace(/(\.|,)/g, '').replace(/\n/g, ' ').split(' ');
  const result = [];
  for (const word of words) {
    if (result.length < count) {
      if (result.length && result.includes(capitalizeFirstLetter(word))) {
        continue;
      }
      if (word.length > minLength) {
        result.push(capitalizeFirstLetter(word.trim()));
      }
    } else {
      break;
    }
  }
  return result;
};