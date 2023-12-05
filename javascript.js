var number1 = prompt("Skriv inn et tall") // "4" f.eks
var number2 = prompt("Skriv inn et annet tall") // "5" f.eks

var sumUnParsed = document.getElementById("sum-not-parsed")
var sumParsed = document.getElementById("sum-parsed")

sumUnParsed.innerHTML += ` ${number1 + number2}`
sumParsed.innerHTML += ` ${parseInt(number1) + parseInt(number2)}`