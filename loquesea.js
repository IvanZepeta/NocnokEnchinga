(function (global) {
    //"use strict";
    console.log("ewe");
    global.loquesea = {
        add: function (firstNumber, secondNumber) {
            return firstNumber + secondNumber;
        },

        subtract: function (firstNumber, secondNumber) {
            return firstNumber - secondNumber;
        },

        multiply: function (firstNumber, secondNumber) {
            return firstNumber * secondNumber;
        },

        divide: function (firstNumber, secondNumber) {
            return firstNumber / secondNumber;
        }
    };
})(window);
