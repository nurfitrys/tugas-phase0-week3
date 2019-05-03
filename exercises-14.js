// Exercises 14 - Mengelompokkan Angka

function mengelompokkanAngka(arr) {
  var arrBaru = []
  for(var i = 0; i < 3; i++) {
    arrBaru.push([])
  }
  for(var j = 0; j < arr.length; j++) {
    if(arr[j] % 3 == 0) {
      arrBaru[2].push(arr[j])
    }
    else if(arr[j] % 2 != 0) {
      arrBaru[1].push(arr[j])
    }
    else if(arr[j] % 2 == 0){
      arrBaru[0].push(arr[j]);
    }
  } return arrBaru;
}
  
console.log(mengelompokkanAngka([2, 4, 6]));
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(mengelompokkanAngka([100, 151, 122, 99, 111]));
console.log(mengelompokkanAngka([]));
