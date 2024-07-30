class StringCalculator {
    add(numbers) {
        if (!numbers) return 0;

        let answer = 0;
        
        let num_array = numbers.split(',');
        
        for(let i=0 ; i<num_array.length ; i++){
            answer += parseInt(num_array[i]);
        }

        return answer;
    }
}

module.exports = StringCalculator;