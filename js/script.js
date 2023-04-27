// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
// Consigli
// Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
// Da quante ore è composto un giorno?
// Da quanti minuti è composta un'ora?
// Da quanti secondi è composto un minuto?
// Da quanti millisecondi è composto un secondo?
// Quanti millisecondi mi separano da domani alle 9:30?
// Esiste un oggetto JS in grado di gestire le date?
// Esistono dei metodi per trasformare una data in millisecondi?
// Buon divertimento!



const arrivalTime = new Date("2023-04-28T09:30:00").getTime();

const currentTime = new Date().getTime();

let remainingTime = arrivalTime - currentTime;

const countDown = setInterval(function(){

    const Days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const Hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const Minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const Seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);


    document.querySelector(".timer").innerHTML = Days + Hours + Minutes  + Seconds;


    if (remainingTime < 0) {
        clearInterval(countDown);
    }
    
}, 1000);

















