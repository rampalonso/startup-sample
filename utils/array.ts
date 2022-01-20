/**
 * 
 * @param arr Array of objects
 * @param key Key to be valited with filter
 * @param filter Filter
 * @returns Single Object, First coincidence encountered by the filter
 */
export const findItem = (arr: any[], key: string, filter: string) => arr.find(item => item[key] === filter);