/*
==================
Tax Administration
==================

[INSTRUCTION]
Di negara wkwkland, seseorang akan mengurus perpajakan. Untuk bisa mengurus, seseorang harus memiliki beberapa informasi:
1. name: nama yang tertera di KTP (harus memiliki nama, tidak boleh kosong)
2. age: umur pendaftar. Untuk bisa mengurus, minimal berumur 17 tahun.

Program akan mengenerate Tax ID dengan format: WKWK-<TAHUN>. <TAHUN> mewakili selisih tahun 2019 dengan umur.

[EXAMPLES]
input :
  name : ''
  age: 19
output: 
  "NAMA ANDA KOSONG! TIDAK BISA DAFTAR!"

input :
  name : 'Hary Dhimas'
  age: 17
output: 
  "BELUM CUKUP UMUR!"

input :
  name : 'John Snow'
  age: 29
output :
  WKWK-1990

[RULES]
  - WAJIB MENGGUNAKAN PSEUDOCODE !
  
  //WRITE YOUR PSEUDOCODE HERE !
1. READ AND STORE name WITH ANY VALUE
2. READ AND STORE name WITH NUMBER
3. IF name '' DISPLAY "NAMA ANDA KOSONG! TIDAK BISA DAFTAR"
   IF name 'Hary Dhimas' AND age Less Than 18 DISPLAY 'BELUM CUKUP UMUR'
   IF name 'John Snow' AND age More Than 18 DiSPLAY 'WKWK' + 2019 - age
*/


function taxAdministration(name, age) {
  if (name == '' && age > 17) {
    return 'NAMA ANDA KOSONG! TIDAK BISA DAFTAR'
  }
  else if (name == 'Hary Dhimas' && age <= 17) {
    return 'BELUM CUKUP UMUR!'
  }
  else if (name == 'John Snow' && age >= 18) {
    return 'WKWK' + '-' + Math.floor(2019 - age)
  }
}

console.log(taxAdministration('Hary Dhimas', 17));
//"BELUM CUKUP UMUR!"
console.log(taxAdministration('', 19));
//"NAMA ANDA KOSONG! TIDAK BISA DAFTAR!"
console.log(taxAdministration('John Snow', 29));
//WKWK-1990

