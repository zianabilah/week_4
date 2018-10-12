// Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

// Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

// Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

// Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

// Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

// Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

// NOTE:
// Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga

function changeVocals (str) {
  var newstr =""
  for (var i = 0; i< str.length; i++){
    switch(str[i]){
      case "a": newstr+= "b"; break;
      case "i": newstr+= "j"; break;
      case "u": newstr+= "v"; break;
      case "e": newstr+= "f"; break;
      case "o": newstr+= "p"; break;
      case "A": newstr+= "B"; break;
      case "I": newstr+= "J"; break;
      case "U": newstr+= "V"; break;
      case "E": newstr+= "F"; break;
      case "O": newstr+= "P"; break;
      default: newstr+= str[i]; break;
    }
  }
  return newstr
  //code di sini
}

function reverseWord (str) {
  if(str.length === 1){
    return str
  }

  return str[str.length-1] + reverseWord(str.substring(0,str.length-1))

  //code di sini
}

function setLowerUpperCase (str) {
  var upper = ""
  // console.log(str)
  for(var i = 0; i < str.length; i++){

    if(str[i] === str[i].toUpperCase()){
      upper+= str[i].toLowerCase()
    } else {
      upper+= str[i].toUpperCase()
    }
  }
  return upper
  //code di sini
}

function removeSpaces (str) {
  var noSpace = "";
  for(var i = 0; i < str.length; i++){
    if(str[i] !== " " ){
      noSpace+= str[i]
    }
  }
  return noSpace
  //code di sini
}

function passwordGenerator (name) {
  if(name.length < 5 ){
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  var step1 = changeVocals(name)
  var step2 = reverseWord(step1)
  var step3 = setLowerUpperCase(step2)
  var step4 = removeSpaces(step3)
  return step4
  
  //code di sini
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'