// CONSEGNA
// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, un prompt alla volta,
// i numeri che ha visto precedentemente. Dopo che sono stati inseriti i 5 numeri,
// il software dice quanti e quali dei numeri da indovinare sono stati individuati

$(document).ready(
  function() {

    // Opzioni
    var numeriDaIndovinare = 5;
    var secondiPerGiocare = 1; // Todo metterla a 30

    // Creare un array con 5 numeri casuali diversi tra loro (uso una funzione)
    var arrayNumeriCasuali = creaArrayNumeriCasuali(numeriDaIndovinare);
    console.log(arrayNumeriCasuali);

    // Fare un alert che mostri i numeri casuali
    alert(arrayNumeriCasuali);

    // Quando l'utente chiude alert, partono 30 secondi
    // alla fine dei quali mostro 5 prompt in cui l'utente deve scrivere
    // i numeri dell'alert che ricorda
    // Controllo quali  e quanti numeri inseriti dall'utente sono presenti nell'array
    // dei numeri casuali e do una risposta
    setTimeout(function() {

      var arrayNumeriUtente = [];
      var arrayNumeriIndovinati = [];

      while (arrayNumeriUtente.length < numeriDaIndovinare) {
        var numeroUtente = parseInt(prompt('Dimmi che numero ricordi.'));
        if (arrayNumeriUtente.includes(numeroUtente) === false) {
          arrayNumeriUtente.push(numeroUtente);
        }
      }
      console.log(arrayNumeriUtente);

      var arrayNumeriIndovinati = [];

      for (var i = 0; i < arrayNumeriUtente.length; i++) {
        if (arrayNumeriCasuali.includes(arrayNumeriUtente[i]) === true) {
          arrayNumeriIndovinati.push(arrayNumeriUtente[i]);
        }
      }

      var messaggio = 'Non hai indovinato nessun numero!';

      if (arrayNumeriIndovinati.length == 5) {
        messaggio = 'Complimenti: hai indovinato tutti i numeri';
      } else if (arrayNumeriIndovinati.length > 0) {
        messaggio = 'Hai indovinato ' + arrayNumeriIndovinati.length + ': i numeri indovinati sono: ' + arrayNumeriIndovinati;
      }


      console.log(arrayNumeriIndovinati);

      alert(messaggio);

    }, secondiPerGiocare * 1000);


    // FUNZIONI
    // Funzione che crea un array di numeri casuali
    function creaArrayNumeriCasuali(numeriArray) {
      var arrayNumeriCasuali = [];

      for (var i = 0; arrayNumeriCasuali.length < numeriArray; i++) {
        var numeroRandom = (Math.floor(Math.random() * 10) + 1);
        if(arrayNumeriCasuali.includes(numeroRandom) === false) {
          arrayNumeriCasuali.push(numeroRandom);
        }
      }
      return arrayNumeriCasuali;
    }

  }
);
