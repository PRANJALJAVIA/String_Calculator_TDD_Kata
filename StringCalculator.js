class StringCalculator {
    add(numbers) {
        if (!numbers) return 0;

        let answer = 0;
        
        let num_array = numbers.split(/[\n,]/);
        
        for(let i=0 ; i<num_array.length ; i++){
            let temp = parseInt(num_array[i]);
            
            if (!isNaN(temp)) {
                answer += temp;
            }
        }

        return answer;
    }
}

module.exports = StringCalculator;