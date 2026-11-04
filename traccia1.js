// TRACCIA 1

let gattiTotali = 47;
let gattiInFila = 6;

// numero di file complete
let file = Math.floor(gattiTotali / gattiInFila);

// gatti che restano fuori
let avanzo = gattiTotali % gattiInFila;

// gatti che mancano per fare un'altra fila
let mancanti = gattiInFila - avanzo;

// se non avanza nessun gatto non ne manca nessuno
if (avanzo == 0) {
    mancanti = 0;
}

console.log("Ci sono " + file + " file di gatti e ne mancano " + mancanti + " per una nuova fila, con un avanzo di " + avanzo);
