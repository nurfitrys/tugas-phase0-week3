// Exercises 5 - Palindrome

function palindrome(kata) {
  var baru = ''
  for (i = kata.length - 1; i >= 0; i--) {
    baru += kata[i]
  }
  if (kata == baru) {
    return true
  } else {
    return false
  }
}

console.log(palindrome('katak')); 
console.log(palindrome('blanket')); 
console.log(palindrome('civic')); 
console.log(palindrome('kasur rusak'));
console.log(palindrome('mister'));
