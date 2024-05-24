export class StringCalculator {
    constructor() {}

    getDelimiterAndCorrectText(numbers){
        let text = numbers.split('\n')
        let delimiters = text[0].substring(2).replace('[','').replace(']','')
        let newText = text[1]
        return [delimiters.split(), newText]
    }

    replace_element(numbers, delimiter){
        if(numbers.includes(delimiter)){
            return numbers.replaceAll(delimiter,',')
        }
        return numbers
    }

    computeNumber(numbers){
        var value = numbers.split(',').map(number => parseInt(number)).filter(element => element < 1000)
        var negatives = value.filter((element) => element < 0)
        if(negatives.length > 0){
            throw new Error("Negatives not allowed. [ "+negatives.join(', ')+" ]")
        }
        return value.reduce((a, b) => a + b, 0);
    }

    uniqueNumberString(numbers){
        if(!numbers.includes(',')){
            return parseInt(numbers)
        }
    }

    add(numbers) {
        var text = ""

        if(numbers == ""){
            return 0
        }
        this.uniqueNumberString(numbers)
        text = this.replace_element(numbers, '\n')
        if(numbers.includes('//')){
            var [delimiters, newText] = this.getDelimiterAndCorrectText(numbers)
            delimiters.forEach(delimiter => {
                text = this.replace_element(newText, delimiter)
            });
        }

        if(text.includes(',,')){
            return 0
        }
        else{
            return this.computeNumber(text)
        }
    }
}