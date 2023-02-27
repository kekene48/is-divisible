//index.js


function isDivisible(num, divisor) {
    switch (num % divisor) {
        case 0:
            return `${num} can be divided by ${divisor}`;
        default:
            return `${num} cannot be divided by ${divisor}`;
    }  
}

module.exports = isDivisible;