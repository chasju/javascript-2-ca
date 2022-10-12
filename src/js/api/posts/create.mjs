import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";

/**
 * Function will take in the postData provided from inputs.
 * 
 * @param {object} postData This is the input information provided in an input and handled in /handlers/createPost.mjs
 * @returns returns the post
 * @example
 * ```js
 * button.addEventListener("click", (e) => {
    e.preventDefault();

    const bodyText = {
      title: "No title",
      body: input.value,
    };
    createPost(bodyText);
  });
  ```
 */

export async function createPost(postData) {
  try {
    const createPostURL = `${API_SOCIAL_URL}${action}`;

    const response = await authFetch(createPostURL, {
      method: "POST",
      body: JSON.stringify(postData),
    });

    const post = await response.json();
    return post;
  } catch (error) {
    console.log(error);
  }
}
