import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";

export async function getPosts() {
  const getPostsURL = `${API_SOCIAL_URL}${action}?limit=300&offset=300&_author=true`;

  const response = await authFetch(getPostsURL);

  const post = await response.json();
  return post;
}

export async function getPost(id) {
  if (!id) {
    throw new Error("Get requires post ID");
  }

  const getPostURL = `${API_SOCIAL_URL}${action}${id}`;

  const response = await authFetch(getPostURL);

  const post = await response.json();
  return post;
}
