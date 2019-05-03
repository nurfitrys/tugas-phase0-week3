// Exercises 3 - Tantangan Array 2 (Melooping menggunakan Array)

function dataHandling(n) {
  for (i=0;i<=n.length-1;i++) {
    var data = ''
    for (j=0; j<=i; j++) {
    }
    console.log('Nomor ID: ' + n[i][0])
    console.log('Nama Lengkap: ' + n[i][1])
    console.log('TTL: ' + n[i][2] + ' ' + n[i][3])
    console.log('Hobi: ' + n[i][4])
    console.log('')
  }
  return data
}
      
console.log(dataHandling([["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                          ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                          ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                          ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]]))
