const checkLength = (string, maxLength) => string.length <= maxLength;

function checkPalindrome(string = '') {
  let reversedString = '';
  let newString = string.replaceAll(' ', '');
  newString = newString.toLowerCase();
  for (let i = newString.length - 1; i >= 0; i--) {
    reversedString += newString.at(i);
  }
  return newString === reversedString;
}

function exportNumber(string) {
  let numberString = '';

  for (let i = 0; i < string.length; i++) {
    if (Number.isNaN(parseInt(string[i], 10)) === false) {
      numberString += string[i];
    }
  }

  return parseInt(numberString, 10);
}
checkPalindrome('sfsdf');
exportNumber('20203 fsfsf');
checkLength('20203 fsfsf');
