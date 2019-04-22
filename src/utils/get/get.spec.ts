import { get } from './get';

describe('Util: get', () => {
    it('should safely traverse an object and return a value.', () => {
        const subject = {
            a: {
                b: {
                    c: {
                        d: 2,
                    },
                },
            },
        };
        expect(get(subject, 'a.b.c.d')).toBe(2);
    });
    it("should return its default value when it can't find a value.", () => {
        const subject = {
            a: {
                b: {
                    c: {
                        d: 2,
                    },
                },
            },
        };
        expect(get(subject, 'a.b.c.d.e', 1)).toBe(1);
    });
});
