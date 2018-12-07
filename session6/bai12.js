var a = 4 ,b = 56,c = 15,d = 30;
function max(a,b,c,d){
    if(a > b && a > c && a > d)
        document.write(a + " la so lon nhat " + "<br>");
    else if(b > c && b > d)
        document.write(b + " la so lon nhat " + "<br>");
    else if(c > d)
        document.write(c + " la so lon nhat " + "<br>");
    else
        document.write(d + " la so lon nhat ");
}
function min(a,b,c,d){
    if(a < b && a < c && a < d)
        document.write(a + " la so be nhat " + "<br>");
    else if(b < c && b < d)
        document.write(b + " la so be nhat " + "<br>");
    else if(c < d)
        document.write(c + " la so be nhat " + "<br>");
    else
        document.write(d + " la so be nhat " + "<br>");
}
max(5,4,9,1)
min(4,9,2,8)