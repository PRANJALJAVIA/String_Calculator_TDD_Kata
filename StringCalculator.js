class StringCalculator {
    add(numbers) {
        if (!numbers) return 0;

        let answer = 0;

        answer += parseInt(numbers);

        return answer;
    }
}

module.exports = StringCalculator;