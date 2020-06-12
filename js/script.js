// CONSEGNA
// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, un prompt alla volta,
// i numeri che ha visto precedentemente. Dopo che sono stati inseriti i 5 numeri,
// il software dice quanti e quali dei numeri da indovinare sono stati individuati

$(document).ready(
  function() {

    // Creare un array con 5 numeri casuali (uso una funzione)
    var arrayNumeriCasuali = creaArrayNumeriCasuali();
    console.log(arrayNumeriCasuali);

    // Fare un alert che mostri i numeri casuali
    alert(arrayNumeriCasuali);

    // Quando l'utente chiude alert, partono 30 secondi
    // alla fine dei quali mostro 5 prompt in cui l'utente deve scrivere
    // i numeri dell'alert che ricorda
    setTimeout(mostraPrompt, 3000); // TODO: mettere 30000

    function mostraPrompt() {
      var arrayNumeriUtente = [];
      for (var i = 0; i < 5; i++) {
        var numeroUtente = parseInt(prompt('Dimmi che numero ricordi.'));
        arrayNumeriUtente.push(numeroUtente);
      }
      return arrayNumeriUtente;
    }

    // Controllo quali  e quanti numeri inseriti dall'utente sono presenti nell'array
    // dei numeri casuali e do una risposta
    


    // FUNZIONI
    // Funzione che crea un array di numeri casuali
    function creaArrayNumeriCasuali() {
      var arrayNumeriCasuali = [];
      for (var i = 0; i < 5; i++) {
          arrayNumeriCasuali.push(Math.floor(Math.random() * 10) + 1);
        }
      return arrayNumeriCasuali;
    }

  }
);
