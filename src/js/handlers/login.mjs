import { login } from "../api/auth/login.mjs";

/**
 * Function that will log in user and reset form when logged in.
 *
 */

export function setLoginFormListener() {
  const form = document.querySelector("#loginForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      login(profile);
      form.reset();
    });
  }
}
