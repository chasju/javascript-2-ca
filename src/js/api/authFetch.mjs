import { load } from "../storage/index.mjs";

/**
 * Function will create header information to be used with Create, Read, Update, Delete.
 *
 * @returns header information that must be sent with CRUD requests. Function is passed into authFetch function.
 * @example
 * ```js
 * export async function authFetch(url, options = {}) {
      return fetch(url, {
        ...options,
        headers: headers(),
      });
}
 * ```
 */

export function headers() {
  const accessToken = load("accessToken");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };
}

/**
 * Function will create authorized information to be used with Create, Read, Update, Delete.
 *
 * @returns fetch function with information that must be sent with CRUD requests. Function is passed into authFetch function.
 * @example
 * ```js
 * export async function getPost(id) {
  const getPostURL = `${API_SOCIAL_URL}${action}/${id}?_author=true`;
  const response = await authFetch(getPostURL);
  const post = await response.json();
  console.log(post)
}
 * ```
 */

export async function authFetch(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}
