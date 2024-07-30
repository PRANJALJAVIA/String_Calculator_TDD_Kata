class StringCalculator {
    add(numbers) {
        if (!numbers) return 0;

        let answer = 0;
        let delimeter = /[\n,]/;
        let num_array;

        if(numbers[0] == '/' & numbers[1] == '/'){
            let indexOfNewLine = numbers.indexOf('\n');
            delimeter = numbers.substring(2, indexOfNewLine)
            let temp_str = numbers.substring(indexOfNewLine+1, numbers.length);
            num_array = temp_str.split(delimeter);
        }
        else{
            num_array = numbers.split(delimeter);
        }
        
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