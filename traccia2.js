// TRACCIA 2

let acqua = 1.20;
let succo = 2.50;
let panino = 3.80;

let credito = 2;
let prezzo = succo;

if (credito == prezzo) {
    console.log("Hai inserito l'importo esatto, ritira il prodotto");
} else if (credito > prezzo) {
    let resto = credito - prezzo;
    console.log("Credito sufficiente, il tuo resto è " + resto.toFixed(2) + " €");
} else {
    let mancano = prezzo - credito;
    console.log("Credito insufficiente, mancano " + mancano.toFixed(2) + " €");
}


// EXTRA: stesso esercizio con lo switch

let prodotto = "panino";
let credito2 = 5;
let prezzo2 = 0;

switch (prodotto) {
    case "acqua":
        prezzo2 = acqua;
        break;
    case "succo":
        prezzo2 = succo;
        break;
    case "panino":
        prezzo2 = panino;
        break;
    default:
        console.log("Prodotto non disponibile");
}

switch (true) {
    case credito2 == prezzo2:
        console.log("Hai inserito l'importo esatto, ritira il prodotto");
        break;
    case credito2 > prezzo2:
        console.log("Credito sufficiente, il tuo resto è " + (credito2 - prezzo2).toFixed(2) + " €");
        break;
    default:
        console.log("Credito insufficiente, mancano " + (prezzo2 - credito2).toFixed(2) + " €");
}
