/**
 * Function will save values to local storage
 *
 * @param {string} key This is description of what is to be saved.
 * @param {object, string} value This is the value provided that is to be saved,
 *
 * @example
 * ```js
 * const name = 'Ola';
 * save('userName', name)
 * ```
 */

export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Function will get the values from local storage
 *
 * @param {string} key This is a description of what is to be fetched from localStorage.
 *
 * @example
 * ```js
 * load('userName')
 * // will return 'Ola'
 * ```
 */

export function load(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch (error) {
    return null;
  }
}

/**
 * Function will delete values from localStorage
 *
 * @param {string} key This is a description of what is to be deleted from localStorage.
 *
 * @example
 * ```js
 * remove('userName')
 * // will delete 'Ola'
 * ```
 */

export function remove(key) {
  localStorage.removeItem(key);
}
