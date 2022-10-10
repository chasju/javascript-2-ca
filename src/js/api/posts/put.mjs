import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";

/**
 * Function will update post of logged in user.
 *
 * @param {object} postData This is the information provided by update form handled in /handlers/updatePost.mjs
 * @returns returns the post
 * @example
 * ```js
 * form.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      post.id = id;
      post.title = "No title";
      console.log(post);

      updatePost(post);
    });
 * ```
 */

export async function updatePost(postData) {
  if (!postData.id) {
    throw new Error("Update requires post ID");
  }
  const updatePostURL = `${API_SOCIAL_URL}${action}/${postData.id}`;

  const response = await authFetch(updatePostURL, {
    method: "PUT",
    body: JSON.stringify(postData),
  });

  const post = await response.json();

  return post;
}
