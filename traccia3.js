// TRACCIA 3

let temperatura = 25;

// parto dai valori più bassi altrimenti le prime condizioni prendono tutto
if (temperatura < -10) {
    console.log("copriti...ancora ti raffreddi");
} else if (temperatura < 0) {
    console.log("non e' tanto il freddo quanto l'umidita'");
} else if (temperatura < 20) {
    console.log("non ci sono piu' le mezze stagioni");
} else if (temperatura < 30) {
    console.log("mi dia una peroni sudata");
} else {
    console.log("lu mare, lu sole, lu ientu");
}


// EXTRA: stesso esercizio con lo switch

let temperatura2 = -12;

switch (true) {
    case temperatura2 < -10:
        console.log("copriti...ancora ti raffreddi");
        break;
    case temperatura2 < 0:
        console.log("non e' tanto il freddo quanto l'umidita'");
        break;
    case temperatura2 < 20:
        console.log("non ci sono piu' le mezze stagioni");
        break;
    case temperatura2 < 30:
        console.log("mi dia una peroni sudata");
        break;
    default:
        console.log("lu mare, lu sole, lu ientu");
}
