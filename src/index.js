module.exports = function toReadable(number) {
    if (number === 0) {
        return "zero";
    }
    let units = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    let dozens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let exception = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    let numToStr = String(number);
    let hundred = "";
    let tens = "";
    let one = "";
    let include = "";
    let exceptionNumbers;

    let result;

    if (numToStr.length === 3) {
        hundred = units[Number(numToStr[0])];
        tens = dozens[Number(numToStr[1])];
        one = units[Number(numToStr[2])];
        include = "hundred";
        exceptionNumbers = Number(numToStr.slice(1));
    }

    if (numToStr.length === 2) {
        tens = dozens[Number(numToStr[0])];
        one = units[Number(numToStr[1])];
        exceptionNumbers = number;
    }

    if (numToStr.length === 1) {
        one = units[Number(numToStr[0])];
    }

    if (10 <= exceptionNumbers && exceptionNumbers < 20) {
        result = `${hundred} ${include} ${exception[exceptionNumbers - 10]}`;
    } else {
        result = `${hundred} ${include} ${tens} ${one}`;
    }

    result = result.replace(/ {1,}/g, " ");

    if (result[result.length - 1] === " ") {
        result = result.slice(0, -1);
    }

    if (result[0] === " ") {
        result = result.slice(1);
    }

    return result;
};
