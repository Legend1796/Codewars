// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
function alphabetPosition(text) {
  const arr = text.split(' ').join('').toLowerCase();
  const alph = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const res = [];
  for (var i = 0; i < arr.length; i += 1) {
    if ((alph.indexOf(arr[i]) + 1) != 0) {
      res.push(alph.indexOf(arr[i]) + 1);
    }
  }
  console.log(res.join(' '));
  return res.join(' ');
}