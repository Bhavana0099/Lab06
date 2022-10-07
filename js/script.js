var futureValue;
var investment;
var rate;
var years;
var i;

investment = parseFloat(prompt("Enter investment amount as xxxx.xx"));
rate = parseFloat(prompt("Enter interest rate as xx.x"));
years = parseInt(prompt("Enter no of years"));

futureValue = investment;
for (i = 1; i <= years; i += 1) {
    futureValue = futureValue + (futureValue * rate /100);
}
futureValue = parseInt(futureValue);
document.write("Investment Amount:" + investment + "<br>");
document.write("Interest Rate:" + rate + "<br>");
document.write("No of Years:" + years + "<br>");
document.write("Future Value:" + futureValue);