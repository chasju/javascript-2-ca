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

/**
 * Function will take in the postData provided from inputs and create a comment.
 * 
 * @param {object} postData This is the input information provided in an input and handled in /handlers/commentPost.mjs
 * @returns returns the comment
 * @example
 * ```js
 * const comment = {
        body: input.value,
      };
      comment.id = id;
      await createComment(comment);
  ```
 */

export async function createComment(postData) {
  try {
    const createCommentURL = `${API_SOCIAL_URL}${action}/${postData.id}/comment`;

    const response = await authFetch(createCommentURL, {
      method: "POST",
      body: JSON.stringify(postData),
    });

    const comment = await response.json();
    return comment;
  } catch (error) {
    console.log(error);
  }
}
