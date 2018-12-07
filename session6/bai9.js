var month;
var year;
function CheckMonth (month, year){
    document.write("Tháng "+ month + " năm "+ year);
    switch(month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 12:
            document.write(" co 31 ngay" + "<br>");break;
        case 9:
        case 10:
        case 11:
        case 6:
        case 4:
            document.write(" co 30 ngay" + "<br>");break;
        case 2:
            if((year % 4 == 0) && (year % 100 != 0 )){
                document.write(" co 29 ngay" + "<br>");
            }
            else{
                document.write(" co 28 ngay" + "<br>");
            }
            yearreak;
        default:
        document.write(" khong phai thang trong nam");break;
    }
}
CheckMonth (7, 1997 )