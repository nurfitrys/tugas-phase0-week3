// Exercises 12 - Deret Geometri

function tentukanDeretGeometri(arr) {
  var selisih = arr[1] / arr[0]
  var deret = true
  for(var i = 1; i < arr.length - 1; i++) {
    var selisihBaru = arr[i+1] / arr[i]
    if(selisihBaru != selisih) {
      deret = false;
    }
  } return deret;
}

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81]));
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32]));
console.log(tentukanDeretGeometri([2, 4, 6, 8]));
console.log(tentukanDeretGeometri([2, 6, 18, 54]));
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9]));
