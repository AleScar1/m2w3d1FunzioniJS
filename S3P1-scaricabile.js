/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const input1 = parseInt(prompt("Inserisci il primo numero:"));
const input2 = parseInt(prompt("Inserisci il secondo numero:"));

function crazySum(num1, num2) {
  if (num1 === num2) {
    console.log((num1 + num2) * 3)
  } else {
    console.log(num1 + num2)
  }
}

crazySum(input1, input2)

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const input = parseInt(prompt("Inserisci un numero intero:"));

function boundary(num) {
    if ((num >= 20 && num <= 100) || num === 400) {
        console.log(true)
    } else {
        console.log(false)
    }       
}

boundary(input)

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString() {
//richiesta digitare stringa
const inserisciStringa = prompt("Inserisci una stringa:")

//dividere i singoli caratteri con apici e stamparli
const arrayString = inserisciStringa.split('')
console.log("Singoli caratteri:", arrayString)

//invertire i singoli caratteri e stamparli
const stringaAlContrario = arrayString.reverse().join('')

console.log("stringa al contrario= " + stringaAlContrario)

}

reverseString();


/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let testo = "esempio first upper case alex"
let testoTrasformato = upperFirst(testo)
console.log(testoTrasformato)

function upperFirst(str) {
  // Dividi la stringa in un array di parole
  const words = str.split(" ") 
  const upperWords = [] // Array per memorizzare le parole modificate

  for (let i of words) { //Ciclo per scorrere ogni parola presente nell'array words
    // Trasforma la prima lettera in maiuscolo e aggiungi il resto della parola con slice 
    let wordUpper = i.charAt(0).toUpperCase() + i.slice(1)
    upperWords.push(wordUpper) // inserisci la parola modificata all'array
  }

  return upperWords.join(" ") // inserisci le parole in una stringa
}

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const n = parseInt(prompt("Quanti numeri casuali vuoi generare?"))

function giveMeRandom(n) {
  const randomNumbers = []
  for (let i = 0; i < n; i++) {
  // con push noiu add il numero generato casuale all array
    randomNumbers.push(Math.floor(Math.random() * 11))
  }
  return randomNumbers
}
console.log("Numeri casuali generati:" + giveMeRandom(n))


//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const lato1 = parseFloat(prompt("Inserisci la lunghezza del primo lato:"))
const lato2 = parseFloat(prompt("Inserisci la lunghezza del secondo lato:"))

function area(l1, l2) {
  return l1 * l2;
}
console.log("L'area del rettangolo è:", area(lato1, lato2))


/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numeroIseritoDaUtente = parseInt(prompt("Inserisci un numero:"));

function crazyDiff(num) {
  let differenza = num - 19

  if (differenza < 0) {
    differenza = differenza * -1
  }

  if (differenza > 19) {
    return differenza * 3
  } else {
    return differenza
  }
}

const result = crazyDiff(numeroIseritoDaUtente);
console.log("Risultato:" + result);


/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const userInput = parseInt(prompt("Inserisci un numero intero positivo:"))

if (userInput > 0) {
  console.log("Risultato:" + check3and7(userInput))
} else {
  console.log("inserisci un numero positivo")
}

function check3and7(num) {
  if (num % 3 === 0 || num % 7 === 0) {
    return true
  } else {
    return false
  }
}


/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
