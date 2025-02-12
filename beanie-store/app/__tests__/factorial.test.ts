import { factorial  } from '@/app/factorial'

describe('factorial tests', () => {
    it('should run', () => {
        factorial()
    })

    it('should return 1 for 0', () => {
        expect(factorial(0)).toBe(1)
    })

    it('should return 1 for 1', () => {
        expect(factorial(1)).toBe(1)
    })

    it('should return 2 for 2', () => {
        expect(factorial(2)).toBe(2)
    })

    it('should return 6 for 3', () => {
        expect(factorial(3)).toBe(6)
    })

    it('should return 6227020800 for 13', () => {
        expect(factorial(13)).toBe(6227020800)
    })

});