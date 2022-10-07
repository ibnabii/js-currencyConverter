//Write your code here
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