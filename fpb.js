// Diberikan sebuah function fpb(angka1, angka2) yang menerima dua parameter angka. Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar). FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut.

// Code
function fpb(angka1, angka2) {
  var angka = 0
  if(angka1 > angka2){
    angka+= angka2
  }else{
    angka+=angka1
  }
  for (var i = angka ; i > 0 ; i--){
    // console.log(i)
    if((angka1 % i === 0) && (angka2 % i === 0) ){
      // console.log(i)
      angka = i;
       break;
    } 
  }
  return angka
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1