var money = 2000;
function NumComfit(money){
    var comfit = 15, vokeo = comfit;
    if(comfit == 2 * vokeo && comfit == money / 200)
        comfit = money / 200 + vokeo * 2;
    document.write(" co " + comfit + " so keo duoc mua");
}
NumComfit(money)