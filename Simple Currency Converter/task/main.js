const input = require('sync-input');

function printWelcome (rate) {
    console.log("Welcome to Currency Converter!");
    Object.keys(rate).forEach((currency) =>{
        console.log(`1 USD equals ${rate[currency]} ${currency}`);
    })
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

function getCommand() {
    const options = ['1', '2'];
    let answer = 'zzz';
    while (!options.includes(answer)){
        console.log('What do you want to do?');
        console.log('1-Convert currencies 2-Exit program');
        answer = input();
        if (!options.includes(answer))
            console.log('Unknown input');
    }
    return Number(answer);
}

function main () {
    const rate = {
        "USD": 1,
        "JPY": 113.5,
        "EUR": 0.89,
        "RUB": 74.36,
        "GBP": 0.75
    };
    const currencies = Object.keys(rate);

    printWelcome(rate);
    while (getCommand() !== 2) {
        while (true) {
            console.log("What do you want to convert?");
            let answer = getCurrency("From: ", currencies);
            if (!answer[0]){
                console.log(answer[1]);
                continue;
            }
            let sourceCurrency = answer[1];

            answer = getCurrency("To: ", currencies);
            if (!answer[0]){
                console.log(answer[1]);
                continue;
            }
            let targetCurrency = answer[1];

            answer = getAmount();
            if (!answer[0]){
                console.log(answer[1]);
                continue;
            }
            let amount = answer[1];

            let converted = convertCurrencies(amount, sourceCurrency, targetCurrency, rate);
            console.log(`Result: ${amount} ${sourceCurrency} equals ${converted} ${targetCurrency}`);
            break;
        }
    }
    console.log("Have a nice day!");
}

main();