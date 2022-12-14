import { API_SOCIAL_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";

const action = "/auth/login";
const method = "POST";

/**
 * Function will login in user and save API result 
 * to localStorage if the user is already registered.
 * 
 * @param {object} profile This is the input information provided in the login form and handled in /handlers/login.mjs
 * @returns returns nothing but sends the user to /pages/profile/
 * @example
 * ```js
 * if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      login(profile);
    });
 * ```
 */

export async function login(profile) {
  const loginURL = `${API_SOCIAL_URL}${action}`;
  console.log(loginURL);

  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body: JSON.stringify(profile),
  });

  // Destructuring API result
  const { accessToken, name, avatar } = await response.json();

  storage.save("accessToken", accessToken);
  storage.save("isLoggedIn", name);
  storage.save("status", "loggedIn");
  storage.save("avatar", avatar);

  console.log(name);
  window.location = "/pages/profile/";
}
