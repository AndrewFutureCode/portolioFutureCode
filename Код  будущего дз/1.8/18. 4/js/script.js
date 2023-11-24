let amountYuan = prompt("Введите сумму в юанях");
const exchangeRate = 13.0
const amountRubles = amountYuan * exchangeRate;
alert(`"Результат конвертации", ${amountYuan} CNY = ${amountRubles} rub`);