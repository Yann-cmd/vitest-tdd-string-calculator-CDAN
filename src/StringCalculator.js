export class StringCalculator {
    constructor() {}

    getDelimiterAndCorrectText(numbers){
        let allDelimiters = []
        let text = numbers.split('\n')
        let delimiters = text[0].match(/\[([^\]]+)\]/g)
        if(delimiters){
            allDelimiters = delimiters.map(match => match.slice(1, -1));
        }
        else{
            allDelimiters = [text[0].substring(2).replaceAll('[','').replaceAll(']','')]
        }
        let newText = text[1]
        return [allDelimiters, newText]
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
                newText = this.replace_element(newText, delimiter)
            });
            text = newText
        }

        if(text.includes(',,')){
            return 0
        }
        else{
            return this.computeNumber(text)
        }
    }
}