var comfit;
var usd,euro;
function dolla(comfit){
    if(comfit == 2 * euro - 3 * usd && comfit == 5 * usd - 3 * euro)
        euro = 8 / 5 * usd;
    usd = comfit / 5;
    document.write(" can " + usd + " usd");
}
dolla(50)
