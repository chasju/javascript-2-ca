import { load } from "../storage/index.mjs";

export function headers() {
  const accessToken = load("accessToken");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };
}

export async function authFetch(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}
