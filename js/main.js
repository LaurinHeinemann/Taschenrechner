function zahlEingeben(eingabe){ // Funktion, um jeweilige Eingabe auf der Ergebnisfläche hinzuzufügen
    document.getElementById('ergebnisfläche').innerHTML +=eingabe //
}

function ergebnisBerechnen(){ // Funktion, um das Ergebnis zu berechnen
    let behaelter = document.getElementById('ergebnisfläche'); // Deklarieren des "behaelter", damit die weiteren Schritte übersichtlicher werden
    behaelter.innerHTML = eval(behaelter.innerHTML); // Ausrechnen der Rechenoperation, die in der "ergebnisfläche" eingegeben wurde
}
function alleLoeschen(){ // Funktion, um die gesamte Eingabe zu löschen
    let behaelter = document.getElementById('ergebnisfläche');
    behaelter.innerHTML = behaelter.innerHTML.slice(0,-999999999999999999); // Alle Zeichen entfernen
}

function letzteLoeschen(){ // Funktion, um die letzte Eingabe zu löschen
    let behaelter = document.getElementById('ergebnisfläche');
    if (behaelter.innerHTML.endsWith(' ')) { // Wenn Eingabe in Ergebnisfläche mit Leerzeichen endet (bei den Operatoren so gestaltet, damit es besser aussieht), dann werden die letzten 3 Zeichen entfernt,
                                             // damit nur ein "DEL-Klick" nötig ist
        behaelter.innerHTML = behaelter.innerHTML.slice(0,-3);
    } else { // Wenn Eingabe in Ergebnisfläche nicht mit Leerzeichen endet, wird wie gewohnt je "DEL-Klick" das letzte Zeichen entfernt
        behaelter.innerHTML = behaelter.innerHTML.slice(0,-1);
    }
}