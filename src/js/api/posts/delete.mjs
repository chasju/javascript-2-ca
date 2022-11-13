import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/posts";

/**
 * Function will take delete post based on id number given by API.
 * 
 * @param {number} id This is the ID of the post that is to be deleted and handled in /handlers/deletePost.mjs
 * @returns returns nothing
 * @example
 * ```js
 * deleteButton.forEach((button) => {
    button.addEventListener("click", (e) => {
      removePost(e.target.id);
    });
  });
  ```
 */

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
