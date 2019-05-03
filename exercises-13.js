// Exercises 13 - Target Terdekat

function targetTerdekat(arr) {
  var xx = 0;
  var oo = 0;
  var tampung = 0;
  var arrBaru = [];
  
  if(arr.indexOf('x') === -1){
    return 0
  }
  else {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === 'x') {
      xx = i
      arrBaru.push(xx)
      }
      else if (arr[i] === 'o') {
      oo = i
      }
   
  var result = []
  for (var j = 0; j < arrBaru.length; j++) {
    tampung = Math.abs(oo - arrBaru[j])
    result.push(tampung)
    result.sort()
    }
    }
  } return result[0]
}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x']));
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); 
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); 
console.log(targetTerdekat([' ', ' ', 'o', ' '])); 
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x']));
