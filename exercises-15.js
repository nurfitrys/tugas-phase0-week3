// Exercises 15 - Mengelompokkan Hewan

function groupAnimals(animals) {
  var kelompok = [[]]
  var a = 0
  animals.sort()
  kelompok[0].push(animals[0])
  for(var i = 1; i < animals.length; i++){
    if(animals[i][0] == kelompok[a][0][0]){
      kelompok[a].push(animals[i])
    } else {
      a++
      kelompok[a] = [animals[i]]
    }
  } return kelompok
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
