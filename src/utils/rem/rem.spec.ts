import { rem } from './rem';

describe('Util: rem', () => {
    it('should add rem to numbers', () => {
        expect(rem(3)).toBe('3rem');
        expect(rem(2.5)).toBe('2.5rem');
    });
    it('should not add rem 0', () => {
        expect(rem(0)).toBe(0);
    });
    it('should not add rem to NaN', () => {
        expect(rem(NaN)).toBe(NaN);
    });
    it('should return if non number', () => {
        expect(rem('4rem')).toBe('4rem');
        expect(rem('12px')).toBe('12px');
        expect(rem('0')).toBe('0');
        expect(rem('base')).toBe('base');
        expect(rem({ a: 1, b: 1 })).toEqual({ a: 1, b: 1 });
    });
});
