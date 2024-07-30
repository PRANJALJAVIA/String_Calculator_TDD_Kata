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

});
