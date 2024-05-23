export class StringCalculator {
    constructor() {}

    addWhenSlash(numbers){
        let text = numbers.split('\n')
        let delimiter = text[0].substring(2).replace('[','').replace(']','')
        let newText = text[1]
        return [delimiter, newText]
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
        value.splice()
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
        if(numbers.includes('//')){
            var [delimiter, newText] = this.addWhenSlash(numbers)
            text = this.replace_element(newText, delimiter)
        }
        else{
            text = this.replace_element(numbers, '\n')
        }

        if(text.includes(',,')){
            return 0
        }
        else{
            return this.computeNumber(text)
        }
    }
}