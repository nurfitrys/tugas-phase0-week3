// Exercises 11 - Deret Aritmatika

function tentukanDeretAritmatika(arr) {
  var selisih = arr[1] - arr[0];
  var deret = true
  for(var i = 1; i < arr.length - 1; i++) {
    var selisihBaru = arr[i+1] - arr[i];
    if(selisihBaru != selisih) {
      deret = false;
    }
  } return deret;
}

console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6]));
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24]));
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); 
console.log(tentukanDeretAritmatika([2, 6, 18, 54]));
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9]));
