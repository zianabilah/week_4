// Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string. Functiona akan me-return sebuah kata baru dimana setiap huruf akan digantikan dengan huruf alfabet setelahnya. Contoh, huruf a akan menjadi b, c akan menjadi d, k menjadi l, dan z menjadi a.

// Code
function ubahHuruf(kata) {
  var huruf = "abcdefghijklmnopqrstuvwxyz"
  var newstr = ""
 for(var i = 0 ; i < kata.length ; i++){
//  console.log(kata[i])
    for(var j = 0 ; j < huruf.length ; j++){
  //  console.log(huruf[j])
       if(kata[i] === huruf[j]){
        newstr += huruf[j+1]
      }
     }
  // you can only write your code here!
}
 return newstr
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu