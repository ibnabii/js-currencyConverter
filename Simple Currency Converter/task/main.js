const input = require('sync-input');

function printWelcome (rate) {
    console.log("Welcome to Currency Converter!");
    Object.keys(rate).forEach((currency) =>{
        console.log(`1 USD equals ${rate[currency]} ${currency}`);
    })
    console.log("What do you want to convert?")
}

function getCurrency (prompt, currencies) {
    let currency = input(prompt).toUpperCase();
    if (currencies.includes(currency)) {
        return [true, currency];
    }
    return [false, 'Unknown currency'];
}

function getAmount () {
    let amount = input("Amount: ");
    if (isNaN(+amount))
        return [false, 'The amount has to be a number'];
    amount = +amount;
    if (amount < 1)
        return [false, 'The amount cannot be less than 1'];
    return [true, amount];
}

function convertCurrencies(amount, source, target, rate)
{
    return (amount / rate[source] * rate[target]).toFixed(4)
}

function main () {
    const rate ={
        "USD": 1,
        "JPY": 113.5,
        "EUR": 0.89,
        "RUB": 74.36,
        "GBP": 0.75
    };
    const currencies = Object.keys(rate);

    printWelcome(rate);
    let answer = getCurrency("From: ", currencies);
    if (!answer[0]){
        console.log(answer[1]);
        return 1;
    }
    let sourceCurrency = answer[1];

    answer = getCurrency("To: ", currencies);
    if (!answer[0]){
        console.log(answer[1]);
        return 1;
    }
    let targetCurrency = answer[1];

    answer = getAmount();
    if (!answer[0]){
        console.log(answer[1]);
        return 1;
    }
    let amount = answer[1];

    let converted = convertCurrencies(amount, sourceCurrency, targetCurrency, rate);
    console.log(`Result: ${amount} ${sourceCurrency} equals ${converted} ${targetCurrency}`);
}

main();