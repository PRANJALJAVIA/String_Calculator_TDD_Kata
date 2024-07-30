class StringCalculator {
    add(numbers) {
        if (!numbers) return 0;

        let answer = 0;
        let delimeter = /[\n,]/; //default delemeter
        let num_array = [];
        let negatives = [];

        if(numbers[0] == '/' & numbers[1] == '/'){
            let indexOfNewLine = numbers.indexOf('\n');
            delimeter = numbers.substring(2, indexOfNewLine) // we have to change old delemeter with new delemeter
            let temp_str = numbers.substring(indexOfNewLine+1, numbers.length);
            num_array = temp_str.split(delimeter);
        }
        else{
            num_array = numbers.split(delimeter);
        }
        
        for(let i=0 ; i<num_array.length ; i++){
            let temp = parseInt(num_array[i]);
            
            if (!isNaN(temp)) {
                if(temp < 0){
                    negatives.push(temp);
                }
                else{
                    answer += temp;
                }
            }
        }

        if(negatives.length > 0){
            throw new Error(`Negative numbers not allowed: ${negatives}`);
        }
        else{
            return answer;
        }
    }
}

module.exports = StringCalculator;