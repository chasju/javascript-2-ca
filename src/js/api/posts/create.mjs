import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";

export async function createPost(postData) {
  const createPostURL = `${API_SOCIAL_URL}${action}`;

  const response = await authFetch(createPostURL, {
    method: "POST",
    body: JSON.stringify(postData),
  });

  const post = await response.json();

  return post;
}