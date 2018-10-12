// Diberikan function hitungHuruf(kalimat) yang akan menerima satu parameter berupa string. Function akan me-return kata dari kalimat yang memiliki jumlah perulangan huruf yang paling besar. Contoh: "Today, is the greatest day ever!" akan me-return "greatest" karena kata "greatest" memiliki 2 huruf e dan 2 huruf t, dan muncul lebih dulu. Jika tidak ditemukan kalimat dengan kata yang memiliki huruf berulang, return -1.

// Code
function hitungHuruf(kata) {
  var katasplit = kata.split(' ')
  //console.log(katasplitted)
  var max = 0
  var result ;
  for (var i = 0 ; i < katasplit.length ; i++){
    var unik = [] 
    var freq = []
    for (var j = 0 ; j < katasplit[i].length ; j++){
      // console.log(katasplitted[i][j]) == buat cek katanya ad smua 
      var cek = true
      for ( var k = 0 ; k <unik.length ; k++){
        // console.log(katasplitted[i][j], unik[k])
        if(katasplit[i][j] === unik[k]){
          cek = false
          break;
        }
      }

      if (cek === true){
        unik.push(katasplit[i][j])
      }
    }
    //console.log(unik) ==> cek unik 

    for (var a = 0 ; a < unik.length ; a++){
      var count = 0
      for (var b = 0 ; b < katasplit[i].length ; b++){
        if (katasplit[i][b] === unik[a]){
          count++
        }
        //console.log(count) cek count
      }
      freq.push(count)
    }
    //console.log(freq) ==> cek freq arraynya
    var hitungduplicate = 0
    for (var c = 0 ; c< freq.length ; c++){
      if (freq[c] > 1){
        hitungduplicate += 1
      }
    }
    if(max < hitungduplicate){
      max = hitungduplicate
      result = katasplit[i]
    }
  }
  return result
}
  

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau