import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/posts";

export async function removePost(id) {
  if (!id) {
    throw new Error("Delete requires post ID");
  }
  const updatePostURL = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await authFetch(updatePostURL, {
    method: "DELETE",
  });

  const post = await response.json();
}
