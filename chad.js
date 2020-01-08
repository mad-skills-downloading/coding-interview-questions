// Given a string, return the string in reverse

const originalString = 'Hello';

let reversedString = '';

// for loop
for (let i = originalString.length - 1; i >= 0; i -= 1) {
  reversedString += originalString[i];
}

console.log(reversedString);

// split to array -> join to string
const revString = originalString
  .split('')
  .reverse()
  .join('');

console.log(revString);

// split to array -> pop/push

const originalStringArray = originalString.split('');
const newStringArray = [];

for (let i = 0; i < originalString.length; i += 1) {
  const poppedLetter = originalStringArray.pop();
  newStringArray.push(poppedLetter);
}

console.log(newStringArray.join(''));

// recursion
function reverseString(str) {
  if (str === '') return '';
  return reverseString(str.substr(1)) + str.charAt(0);
}

reverseString('today');
