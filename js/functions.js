function checkLength(string, maxLength) {
  if (string.length <= maxLength) {

    return true;
  }
  return false;
}

function checkPalindrome(inputString = '') {
  let reversedString = '';
  let newString = inputString.replaceAll(' ', '');
  newString = newString.toLowerCase();
  for (let i = newString.length - 1; i >= 0; i--) {
    reversedString += newString.at(i);
  }
  return newString === reversedString;
}

function exportNumber(inputString) {
  let numberString = '';

  for (let i = 0; i < inputString.length; i++) {
    if (Number.isNaN(parseInt(inputString[i], 10)) === false) {
      numberString += inputString[i];
    }
  }
  //= Math.abs(parseInt('ECMAScript 2022'));

  return numberString === '' ? NaN : Number(numberString);
}

