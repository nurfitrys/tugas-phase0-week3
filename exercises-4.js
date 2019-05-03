// Exercises 4 - Tantangan Array 3 (Array Join, Split, Slice, Splice, Sort)

function dataHandling2 (input) {
  input.splice(1, 1, 'Roman Alamsyah Elsharawy')
  input.splice(2, 1, 'Provinsi Bandar Lampung')
  input.splice(3, 0, 'Pria, SMA Internasional Metro')
  input.splice(6, 1)
  console.log(input)
    
  splitTanggal = input.slice(4, 5)
  tanggal = splitTanggal[0].split('/')
    
  splitBulan = tanggal.slice(1, 2)
  bulan = parseInt(splitBulan);
    
  switch(bulan) {
    case 01 : console.log('Januari');break;
    case 02 : console.log('Februari');break;
    case 03 : console.log('Maret'); break;
    case 04 : console.log('April');break;
    case 05 : console.log('Mei');break;
    case 06 : console.log('Juni');break;
    case 07 : console.log('Juli');break;
    case 08 : console.log('Agustus');break;
    case 09 : console.log('September');break;
    case 10 : console.log('Oktober');break;
    case 11 : console.log('November');break;
    case 12 : console.log('Desember');break;
  }
    
  tanggalBaru = tanggal.sort(function(a, b) {
    return b - a
  })
  console.log(tanggalBaru)
    
  tanggal = splitTanggal[0].split('/')
  tanggalJoin= tanggal.join('-')
  console.log(tanggalJoin)
    
  nama = input[1].slice(0, 15)
  console.log(nama)
}
    
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);
