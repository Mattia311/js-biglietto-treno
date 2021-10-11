// chiedere all'utente quanti km vuole percorrere
const numeroKm = prompt('Quanti km vuoi percorrere?');
// chiedere l'età del passeggero
const numeroAge = prompt('Quanti anni hai?');

console.log('devo fare', numeroKm, 'km', 'e ho', numeroAge, 'anni');


//costo totale biglietto
const costoBliglietto = (numeroKm * 0.21);
console.log('il biglietto senza sconto costa ' + costoBliglietto + ' euro');


//sconto biglietto 
const percentage1 = 20;
const percentage2 = 40;

if(numeroAge < 18) {
    const bigliettoMin = (costoBliglietto * percentage1) / 100;
    var totaleBiglietto = (costoBliglietto - bigliettoMin)
    console.log('il biglietto con lo sconto del 20% costa ' + totaleBiglietto);
    document.getElementById('prezzo_biglietto').innerHTML = totaleBiglietto;
    totaleBiglietto = totaleBiglietto.toFixed(2);
} else if(numeroAge > 65) {
    const bigliettoMax = (costoBliglietto * percentage2) / 100;
    var totaleBiglietto = (costoBliglietto - bigliettoMax)
    console.log('il biglietto con lo sconto del 40% costa ' + totaleBiglietto);
    document.getElementById('prezzo_biglietto').innerHTML = totaleBiglietto;
    totaleBiglietto = totaleBiglietto.toFixed(2);

} else {
    console.log('il biglietto costerà', costoBliglietto );
}
