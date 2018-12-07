var a = 9;
// var b = 5;
document.write(" nhap a: " + a + "<br>");
function evenandodd(a) {
    if(a % 2 == 0)
        document.write( a + " la so chan " + "<br>");
    else
        document.write( a + " la so le " + "<br>");
}
evenandodd(a)
function checkfibo(a){
var i = 1, j = 1;
fibo = i + j;
if(a == 1 || a == 2)
document.write(a + " thuoc day fibonaci tu 1-100" + "<br>");
else
    while(a > fibo){
        i = j;
        j = fibo;
        fibo = i+j;
    }
    if(fibo == a)
        document.write( a + " co trong day fibonaci tu 1-100" + "<br>");
    else
        document.write( a + " khong co trong day fibonaci tu 1-100" + "<br>");
}
checkfibo(5)
function numberofpoles(a){
    var i = 1;
    while(i  < Math.sqrt(a)){
        i++;
    }
        if(i * i == a)
            document.write(a + " la so chinh phuong " + "<br>");
        else
            document.write(a + " khong phai la so chinh phuong" + "<br>");
}
numberofpoles(36)