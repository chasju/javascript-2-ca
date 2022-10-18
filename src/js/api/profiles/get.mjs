import { load } from "../../storage/index.mjs";
import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";
/**
 * Function will GET profile of logged in user.
 *
 *
 * @returns returns profile API results.
 * @example
 * ```js
 * async function getOnePost() {
 *  const profile = await getProfile();
 *  console.log(profile)
 * }
 * ```
 */

export async function getProfile() {
  const name = load("isLoggedIn");

  const getProfileURL = `${API_SOCIAL_URL}/profiles/${name}`;

  const response = await authFetch(getProfileURL);

  const profile = await response.json();
  return profile;
}
