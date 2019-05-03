// Exercises 6 - Palindrome Angka

function angkaPalindrome(num) {
  for (var i = 0; i < num; i++){
    num++;
    var numBaru = String(num);
    var string = '';
    for (j = numBaru.length - 1; j >= 0; j--){
      string += numBaru[j];   
    }
    if(numBaru == string){
    return num;
    }
  }
}

console.log(angkaPalindrome(8));
console.log(angkaPalindrome(10)); 
console.log(angkaPalindrome(117));
console.log(angkaPalindrome(175)); 
console.log(angkaPalindrome(1000));
