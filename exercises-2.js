// Exercises 2 - Tantangan Array 1 (Mengakses Nilai dalam Array)

function balikString (str) {
  var baru = ''
  for (i = str.length - 1; i >= 0; i--) {
    baru += str[i]
  }
  return baru
}

console.log(balikString('Hello world!'))
