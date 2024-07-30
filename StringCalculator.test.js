const { describe, beforeEach, it } = require('node:test');
const StringCalculator = require('./StringCalculator');
const assert = require('assert');

describe('StringCalculator', ()=> {
    let calculator;

    beforeEach(() => {
        calculator = new StringCalculator();
    });

    it('should return 0 for an empty string', () => {
        assert.strictEqual(calculator.add(""), 0);
    });

    it('should return number itself for single integer', ()=> {
        assert.strictEqual(calculator.add("2"), 2);
    });

    it('should return sum of comma seperated numbers', ()=> {
        assert.strictEqual(calculator.add("2,3,4"), 9);
    });

    it('should handle newlines between numbers as well as commas', ()=> {
        assert.strictEqual(calculator.add("1\n,2,3\n"), 6);
    });

    it('should handle different delimiters', ()=> {
        assert.strictEqual(calculator.add("//;\n1;2"), 3);
        assert.strictEqual(calculator.add("//|\n1|2"), 3);
    });

    it('should handle negative numbers, negative numbers are not allowed', () => {
        try {
            calculator.add("-12,-5,8");
        } catch (e) {
            assert.strictEqual(e.message, 'Negatives not allowed: -12,-5');
        }
        try {
            calculator.add("//|\n-2|-3|5");
        } catch (e) {
            assert.strictEqual(e.message, 'Negatives not allowed: -2,-3');
        }
    });
});