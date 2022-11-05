const rand = (decimals, min = 0, floatingDigits = 0) =>
    Math.floor(Math.random() * decimals * Math.pow(10, floatingDigits)) /
    Math.pow(10, floatingDigits);

// min , max, floats
