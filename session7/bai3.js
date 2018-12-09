var money = 2000, Candy = 0,bark = 0;
while ((money <= 2000)) {
	if (bark < 2) {
		Candy++;
		bark++;
        money = money - 200;
	} else if ((bark == 2) && (money == 0)) {
		bark = bark - 2;
		Candy++;
		break;
	} else {
		bark = bark - 1;
        Candy++;
	}
}
document.write(" So keo duoc mua : ", + Candy + " vien");