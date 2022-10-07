import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "POST";

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
  return result;
}