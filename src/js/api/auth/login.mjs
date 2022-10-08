import { API_SOCIAL_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";

const action = "/auth/login";
const method = "POST";

export async function login(profile) {
  const loginURL = `${API_SOCIAL_URL}${action}`;

  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body: JSON.stringify(profile),
  });

  // Destructuring API result
  const { accessToken, name } = await response.json();

  storage.save("accessToken", accessToken);
  storage.save("isLoggedIn", name);
  storage.save("status", "loggedIn");

  alert("you are now logged in");
  window.location = "/pages/profile/";
}
