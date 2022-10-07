const input = require('sync-input');

let rate ={
    "USD": 1,
    "JPY": 113.5,
    "EUR": 0.89,
    "RUB": 74.36,
    "GBP": 0.75
};

const currencies = ["USD", "JPY", "EUR", "RUB", "GBP"];

console.log("Welcome to Currency Converter!");

currencies.forEach((currency) =>{
    console.log(`1 USD equals ${rate[currency]} ${currency}`);
})
console.log('I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP');

// let sourceCurrency = input("Type the currency you wish to convert: ");
let sourceCurrency = "USD";
console.log(`Type the currency you wish to convert: ${sourceCurrency}`)
if (currencies.includes(sourceCurrency.toUpperCase())) {
    let targetCurrency = input("To: ").toUpperCase();
    if (currencies.includes(targetCurrency)) {
        let amount = input("Amount: ");
        if (isNaN(+amount)) {
            console.log("The amount has to be a number");
        } else {
            amount = +amount;
            if (amount < 1) {
                console.log("The amount cannot be less than 1")
            } else {
                console.log(`Result: ${amount} ${sourceCurrency} equals ${(amount * rate[targetCurrency]).toFixed(4)} ${targetCurrency}`);
            }
        }
    } else {
        console.log('Unknown currency');
    }
} else {
    console.log('Unknown currency');
}
