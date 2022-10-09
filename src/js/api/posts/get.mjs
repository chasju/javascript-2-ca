import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import { load } from "../../storage/index.mjs";

const action = "/posts";

export async function getPosts() {
  const getPostsURL = `${API_SOCIAL_URL}${action}?_author=true&sort=updated&sortOrder=desc&limit=300`;

  const response = await authFetch(getPostsURL);

  const post = await response.json();
  return post;
}

export async function getPost(id) {
  if (!id) {
    throw new Error("Get requires post ID");
  }

  const getPostURL = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await authFetch(getPostURL);

  const post = await response.json();
  return post;
}

export async function getProfile() {
  const name = load("isLoggedIn");

  const getProfileURL = `${API_SOCIAL_URL}/profiles/${name}`;

  const response = await authFetch(getProfileURL);

  const profile = await response.json();
  return profile;
}
