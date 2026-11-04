// EXTRA: torneo

let punteggi = [72, 88, 65];

let totale = 0;
for (let i = 0; i < punteggi.length; i++) {
    totale = totale + punteggi[i];
}

let media = totale / punteggi.length;

let max = punteggi[0];
let min = punteggi[0];
for (let i = 1; i < punteggi.length; i++) {
    if (punteggi[i] > max) {
        max = punteggi[i];
    }
    if (punteggi[i] < min) {
        min = punteggi[i];
    }
}

let risultato = "";
if (media < 50) {
    risultato = "principiante";
} else if (media < 70) {
    risultato = "intermedio";
} else if (media < 90) {
    risultato = "esperto";
} else {
    risultato = "campione";
}

console.log("Punteggio totale: " + totale);
console.log("Media: " + media);
console.log("Punteggio più alto: " + max);
console.log("Punteggio più basso: " + min);
console.log("Risultato: " + risultato);
