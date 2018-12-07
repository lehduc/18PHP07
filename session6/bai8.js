var a = 12;
var b = 2000;
document.write(" a : " + a +"<br>");
// switch(a) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//     case 11:
//     case 12:
//     document.write(" day la thang"+a);
//     break;
//     default:
//     document.write("khong phai thang trong nam");
// }
if(a >= 1 && a <= 12){
    document.write(" day la thang" + a + "<br>");
}
else{
    document.write("khong phai thang trong nam");
}
for(var i = 1; i <= 12; i++){
    document.write("day la thang" + i + "<br>");
}