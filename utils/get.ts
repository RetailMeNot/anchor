export const get = (obj: any, path: string, defaultValue: any) => path.split('.')
  .reduce((a, c) => (a && a[c] ? a[c] : (defaultValue || null)), obj);
