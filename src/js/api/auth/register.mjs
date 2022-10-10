import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "POST";

/**
 * Function will login in user and save API result 
 * to localStorage if the user is already registered.
 * 
 * @param {object} profile This is the input information provided in the register form and handled in /handlers/register.mjs
 * @returns returns result and sends the user to /pages/login/ so user can login and API information stored to localStorage
 * @example
 * ```js
 * if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      register(profile);
    });
  }
 * ```
 */

export async function register(profile) {
  const registerURL = `${API_SOCIAL_URL}${action}`;

  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body: JSON.stringify(profile),
  });

  const result = await response.json();
  alert("Your account has been set up");
  window.location = "/pages/login/";
  return result;
}
