// Exercises 8 - Pasangan Angka Terbesar

function pasanganTerbesar(num) {
  var str = String(num)
  var banding = 0
  for (i = 0; i < str.length; i++) {
    angka = Number(str[i] + str[i+1])
    if (angka > banding) {
      banding = angka
    }
  } return banding
}
  
  console.log(pasanganTerbesar(641573));
  console.log(pasanganTerbesar(12783456));
  console.log(pasanganTerbesar(910233));
  console.log(pasanganTerbesar(71856421));
  console.log(pasanganTerbesar(79918293));
