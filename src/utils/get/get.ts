/**
 * @param obj - an object that needs to be safely traversed `{ a: { b: true } }`
 * @param path - a string that represents the path of the object `'a.b'`
 * @param defaultValue - a value to return if the path doesn't resolve in the object
 * @description Our version of lodash's get() method, just less bloated.
 */
export const get = (obj: any, path: string, defaultValue?: any) =>
    path
        .split('.')
        .reduce((a, c) => (a && a[c] ? a[c] : defaultValue || null), obj);
