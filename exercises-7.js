// Exercises 7 - Menghitung Jumlah Kata

function hitungJumlahKata(kalimat) {
  var kalimatBaru = kalimat.split(' ')
  var kata = 0
  for (i = 1; i <= kalimatBaru.length; i++) {
    kata++
  } return kata
} 

console.log(hitungJumlahKata('I have a dream'));
console.log(hitungJumlahKata('Never eat shredded wheat or cake'));
console.log(hitungJumlahKata('A song to sing'));
console.log(hitungJumlahKata('I'));
console.log(hitungJumlahKata('I believe I can code'));
