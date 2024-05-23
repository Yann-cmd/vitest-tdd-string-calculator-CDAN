import { expect, it, describe } from 'vitest'
import { StringCalculator } from '../../StringCalculator'

describe('StringCalculator replace_element method tests', () => {
    let stringCalculator = new StringCalculator();

    it("method should replace the delimiter by ,", () => {
        expect(stringCalculator.replace_element("1\n2,3","\n")).toBe("1,2,3")
    })

    it("method not replace the delimiter because he's not in the str", () => {
        expect(stringCalculator.replace_element("1,2,3","&")).toBe("1,2,3")
    })
})

describe('StringCalculator add method tests', () => {
    let stringCalculator = new StringCalculator();

    it('method should return 0 when "" is passed', () => {
        expect(stringCalculator.add("")).toBe(0)
    })

    it('method should return 0 when several delimiters follows', () => {
        expect(stringCalculator.add("1,\n")).toBe(0)
    })

    it('method should return the int number when one is given', () => {
        expect(stringCalculator.add("1")).toBe(1)
    })

    it('method should add all of the numbers passed', () => {
        expect(stringCalculator.add("1,2,3,4,5,1,2,3,4,5")).toBe(30)
    })

    it('method should add all of the numbers with one delimiter (;)', () => {
        expect(stringCalculator.add("//;\n1;2")).toBe(3)
    })

    it('method should throw Error when negative numbers are passed', () => {
        expect(() => stringCalculator.add("//;\n1;-2;-16\n1")).toThrowError('Negatives not allowed. [ -2, -16 ]')
    })

    it('chemin du sang du serp', () => {
        expect(stringCalculator.add("1\n2,1002")).toBe(3)
    })

    it('chemin du sang du serp 2', () => {
        expect(stringCalculator.add("//[***]\n1***2***3")).toBe(6)
    })
})